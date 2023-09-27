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