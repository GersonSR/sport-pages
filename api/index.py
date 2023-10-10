from flask import Flask
import statsapi
from datetime import *; from dateutil.relativedelta import *
import calendar

app = Flask(__name__)

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
    player_data = statsapi.get("person", {"personId": person_id, "hydrate": "stats(group=[hitting,pitching,fielding],type=[career], sportId=1)"})
    return player_data

@app.route("/api/mlb/player/info/<player_id>")
def mlb_player_data(player_id) :
    player_data = statsapi.get("person", {"personId": player_id, "hydrate": "stats(group=[hitting,pitching,fielding],type=[career], sportId=1)"})
    return player_data

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

@app.route("/api/mlb/player/<player_id>/stats/<season>")
def mlb_player_season_stats(player_id, season):
    player_data = statsapi.get("person", {"personId": player_id, "hydrate": "stats(group=[hitting,pitching,fielding],type=[season],season="+season+",sportId=1)"})
    return player_data

