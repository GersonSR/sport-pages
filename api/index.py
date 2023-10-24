from flask import Flask
import statsapi
from datetime import *; from dateutil.relativedelta import *
import calendar
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/api/mlb/schedule/<date>")
def mlb_schedule_single(date):
    if (date == "today") :
        date = datetime.today().strftime("%m/%d/%Y")
    else :
        date = datetime.strptime(date, '%Y-%m-%d')
    schedule = statsapi.schedule(date)
    return schedule

@app.route("/api/mlb/team/<team_id>")
def mlb_team(team_id):
    team = statsapi.lookup_team(team_id)
    return team

@app.route("/api/mlb/standings/<date>")
def mlb_standings(date):
    if (date == "today") :
        date = datetime.today().strftime("%m/%d/%Y") #currently not accounting for regular season end/start
        date = "10/01/2023" #temporary fix
    else :
        date = datetime.strptime(date, '%Y-%m-%d') #this is wrong and have to fix
    standings = statsapi.standings_data(leagueId="103,104", division="all", include_wildcard=True, season=None, standingsTypes=None, date=date)
    return standings

@app.route("/api/mlb/team/<team_id>/roster/<date>")
def mlb_roster(team_id, date):
    date = date.replace("-", "/")
    roster = statsapi.get('team_roster', {'teamId': team_id, 'date': date})
    return roster

@app.route("/api/mlb/team/<team_id>/stats/<category>/<season>/<game_type>/<amount>")
def mlb_team_stats(team_id, category, season, game_type, amount):
    if (season == "current") :
        season = datetime.today().year
    else :
        season = int(season)

    if (game_type == "regular") :
        game_type = "R"
    elif (game_type == "postseason") :
        game_type = "P"
    elif (game_type == "spring") :
        game_type = "S"
    
    amount = int(amount)

    category = category.replace("%20", "")

    print(season, game_type, amount, category)
    stats = statsapi.team_leader_data(team_id, category, season, game_type, amount)
    return stats

@app.route("/api/mlb/teamleaders/categories")
def mlb_teamleaders_categories():
    categories = statsapi.meta('leagueLeaderTypes')
    return categories

# @app.route("/api/mlb/players/<player_id>/<type>/<group>")
# def mlb_player(player_id, type, group) :
#     player_data = statsapi.player_stat_data(player_id) #Later add type and group, view Docs.
#     return player_data

@app.route("/api/mlb/people/<persons_id>")
def mlb_people(persons_id) :
    player_data = statsapi.get("people", {"personIds": persons_id})
    return player_data

@app.route("/api/mlb/person/<person_id>")
def mlb_person(person_id) :
    player_data = statsapi.get("person", {"personId": person_id})
    return player_data

@app.route("/api/mlb/player/info/<player_id>")
def mlb_player_data(player_id) :
    player_data = statsapi.get("person", {"personId": player_id, "hydrate": "stats(group=[hitting,pitching,fielding],type=[career], sportId=1)"})
    return player_data

@app.route("/api/mlb/player/info/yby/<player_id>")
def mlb_player_data_yby(player_id) :
    player_data = statsapi.get("person", {"personId": player_id, "hydrate": "stats(group=[hitting,pitching,fielding],type=[YearByYear], sportId=1)"})
    return player_data

@app.route("/api/mlb/player/info/<player_id>/type/<type>")
def mlb_player_data_type(player_id, type) :
    player_data = statsapi.get("person", {"personId": player_id, "hydrate": "stats(group=[hitting,pitching,fielding],type={}, sportId=1)".format(type)})
    return player_data

@app.route("/api/mlb/player/info/<player_id>/season/<season>")
def mlb_player_season_stats(player_id, season):
    player_data = statsapi.get("person", {"personId": player_id, "hydrate": "stats(group=[hitting,pitching,fielding],type=[season],season="+season+",sportId=1)"})
    return player_data

@app.route("/api/mlb/player/info/experience/<player_id>", strict_slashes=False)
def mlb_player_seasons_played(player_id):
    player_data = statsapi.get("person", {"personId": player_id, "hydrate": "stats(group=[hitting,pitching,fielding],type=[YearByYear],sportId=1)"})
    years = []
    for year in player_data["people"][0]["stats"]:
        for statYear in year["splits"]:
            season = statYear["season"]
            if season not in years:
                years.append(season)
    return years

@app.route("/api/mlb/playersearch/<name>")
def mlb_player_search(name) :
    name = name.replace("%20", " ") #Assumption here is both first and last name are being searched
    player_data = statsapi.lookup_player(name)    
    return player_data

@app.route("/api/mlb/team/<team_id>/coaches/<date>")
def mlb_team_coaches(team_id, date):
    date = date.replace("-", "/")
    roster = statsapi.get('team_coaches', {'teamId': team_id, 'date': date})
    return roster


#Games API Routes

@app.route("/api/mlb/game/<game_id>")
def mlb_major_game(game_id):
    game = statsapi.get("game", {"gamePk": game_id}) 
    formattedGame = {}

    #Adds general game info, originally an array parsed into a single object
    formattedGame["gameBoxInfo"] = {}
    for item in game["liveData"]["boxscore"]["info"] :
        label = item["label"]
        if "value" in item :
            value = item["value"]
        else :
            value = item["label"]

        
        formattedGame["gameBoxInfo"][label] = value

    #Adds umps
    formattedGame["officials"] = game["liveData"]["boxscore"]["officials"]
    #Away Team Info
    formattedGame["away"] = game["liveData"]["boxscore"]["teams"]["away"]
    #Home Team Info
    formattedGame["home"] = game["liveData"]["boxscore"]["teams"]["home"]

    #Game pitching decisions
    if ("decisions" in game["liveData"]):
        formattedGame["decisions"] = game["liveData"]["decisions"]
    else :
        formattedGame["decisions"] = None
        
    #Linescore
    formattedGame["linescore"] = game["liveData"]["linescore"]

    #Game status
    formattedGame["status"] = game["gameData"]["status"]

    #Team General Info
    formattedGame["teams"] = game["gameData"]["teams"]

    #Game Datetime Info
    formattedGame["datetime"] = game["gameData"]["datetime"]

    #Formatted Game Data from Stats API
    #For detailed info, view https://github.com/toddrob99/MLB-StatsAPI/blob/master/statsapi/__init__.py
    #Along with https://github.com/toddrob99/MLB-StatsAPI/wiki/Function:-boxscore
    gameInfoFormatted = statsapi.boxscore_data(game_id, timecode=None)

    # This adds all other game info to the formattedGame object not included in the above
    for key in gameInfoFormatted:
        if (key in ["away", "home", "gameBoxInfo", "gameId", "teamInfo"]):
            continue
        else:
            formattedGame[key] = gameInfoFormatted[key]

    return formattedGame