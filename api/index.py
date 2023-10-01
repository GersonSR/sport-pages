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
        date = datetime.today().strftime("%m/%d/%Y")
    else :
        date = datetime.strptime(date, '%Y-%m-%d')
    standings = statsapi.standings_data(leagueId="103,104", division="all", include_wildcard=True, season=None, standingsTypes=None, date=date)
    return standings

@app.route("/api/mlb/team/<team_id>/roster")
def mlb_roster(team_id):
    roster = statsapi.get('team_roster', {'teamId': team_id})
    return roster

@app.route("/api/mlb/team/<team_id>/stats/<category>/<season>/<game_type>/<amount>")
def mlb_team_stats(team_id, category, season, game_type, group):
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

    stats = statsapi.team_stats(team_id, category, season, game_type, amount)
    return stats



@app.route("/api/mlb/teamleaders/categories")
def mlb_teamleaders_categories():
    categories = statsapi.meta('leagueLeaderTypes')
    return categories

