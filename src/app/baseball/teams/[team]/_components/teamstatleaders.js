"use client";

import StatsTable from "./_statleaders/statstable";
import styles from "./teamstatleaders.module.css";

const TeamStatLeaders = ({ team }) => {
  console.log(team);
  const teamID = team.id;
  let categories = [
    [
      {
        displayName: "airOuts",
        stat: "Air Outs",
      },
      {
        displayName: "assists",
        stat: "Assists",
      },
      {
        displayName: "atBats",
        stat: "At Bats",
      },
      {
        displayName: "balk",
        stat: "Balk",
      },
      {
        displayName: "battingAverage",
        stat: "Batting Average",
      },
      {
        displayName: "blownSaves",
        stat: "Blown Saves",
      },
      {
        displayName: "catcherEarnedRunAverage",
        stat: "Catcher Earned Run Average",
      },
      {
        displayName: "catchersInterference",
        stat: "Catchers Interference",
      },
      {
        displayName: "caughtStealing",
        stat: "Caught Stealing",
      },
      {
        displayName: "chances",
        stat: "Chances",
      },
      {
        displayName: "completeGames",
        stat: "Complete Games",
      },
      {
        displayName: "doublePlays",
        stat: "Double Plays",
      },
      {
        displayName: "doubles",
        stat: "Doubles",
      },
      {
        displayName: "earnedRun",
        stat: "Earned Run",
      },
      {
        displayName: "earnedRunAverage",
        stat: "Earned Run Average (ERA)",
      },
      {
        displayName: "errors",
        stat: "Errors",
      },
      {
        displayName: "extraBaseHits",
        stat: "Extra Base Hits",
      },
      {
        displayName: "fieldingPercentage",
        stat: "Fielding Percentage",
      },
      {
        displayName: "flyouts",
        stat: "Flyouts",
      },
      {
        displayName: "gamesFinished",
        stat: "Games Finished",
      },
      {
        displayName: "gamesPlayed",
        stat: "Games Played",
      },
      {
        displayName: "gamesStarted",
        stat: "Games Started",
      },
      {
        displayName: "groundIntoDoublePlays",
        stat: "Ground Into Double Plays",
      },
      {
        displayName: "groundoutToFlyoutRatio",
        stat: "Groundout to Flyout Ratio",
      },
      {
        displayName: "groundOuts",
        stat: "Ground Outs",
      },
      {
        displayName: "hitByPitches",
        stat: "Hit by Pitches",
      },
      {
        displayName: "hitBatsman",
        stat: "Hit Batsman",
      },
      {
        displayName: "hits",
        stat: "Hits",
      },
      {
        displayName: "hitsPer9Inn",
        stat: "Hits per 9 Innings",
      },
      {
        displayName: "holds",
        stat: "Holds",
      },
      {
        displayName: "homeRuns",
        stat: "Home Runs",
      },
      {
        displayName: "innings",
        stat: "Innings",
      },
      {
        displayName: "inningsPitched",
        stat: "Innings Pitched",
      },
      {
        displayName: "intentionalWalks",
        stat: "Intentional Walks",
      },
      {
        displayName: "losses",
        stat: "Losses",
      },
      {
        displayName: "numberOfPitches",
        stat: "Number of Pitches",
      },
      {
        displayName: "onBasePercentage",
        stat: "On Base Percentage (OBP)",
      },
      {
        displayName: "onBasePlusSlugging",
        stat: "On Base Plus Slugging (OPS)",
      },
      {
        displayName: "outfieldAssists",
        stat: "Outfield Assists",
      },
      {
        displayName: "passedBalls",
        stat: "Passed Balls",
      },
      {
        displayName: "pickoffs",
        stat: "Pickoffs",
      },
      {
        displayName: "pitchesPerInning",
        stat: "Pitches per Inning",
      },
      {
        displayName: "putOuts",
        stat: "Put Outs",
      },
      {
        displayName: "rangeFactorPerGame",
        stat: "Range Factor per Game",
      },
      {
        displayName: "rangeFactorPer9Inn",
        stat: "Range Factor per 9 Innings",
      },
      {
        displayName: "runsBattedIn",
        stat: "Runs Batted In (RBI)",
      },
      {
        displayName: "runs",
        stat: "Runs",
      },
      {
        displayName: "sacrificeBunts",
        stat: "Sacrifice Bunts",
      },
      {
        displayName: "sacrificeFlies",
        stat: "Sacrifice Flies",
      },
      {
        displayName: "saveOpportunities",
        stat: "Save Opportunities",
      },
      {
        displayName: "saves",
        stat: "Saves",
      },
      {
        displayName: "shutouts",
        stat: "Shutouts",
      },
      {
        displayName: "sluggingPercentage",
        stat: "Slugging Percentage (SLG)",
      },
      {
        displayName: "stolenBasePercentage",
        stat: "Stolen Base Percentage",
      },
      {
        displayName: "stolenBases",
        stat: "Stolen Bases",
      },
      {
        displayName: "strikeouts",
        stat: "Strikeouts",
      },
      {
        displayName: "strikeoutsPer9Inn",
        stat: "Strikeouts per 9 Innings",
      },
      {
        displayName: "strikeoutWalkRatio",
        stat: "Strikeout/Walk Ratio",
      },
      {
        displayName: "throwingErrors",
        stat: "Throwing Errors",
      },
      {
        displayName: "totalBases",
        stat: "Total Bases",
      },
      {
        displayName: "totalBattersFaced",
        stat: "Total Batters Faced",
      },
      {
        displayName: "totalPlateAppearances",
        stat: "Total Plate Appearances",
      },
      {
        displayName: "triplePlays",
        stat: "Triple Plays",
      },
      {
        displayName: "triples",
        stat: "Triples",
      },
      {
        displayName: "walks",
        stat: "Walks",
      },
      {
        displayName: "walksAndHitsPerInningPitched",
        stat: "Walks and Hits per Inning Pitched (WHIP)",
      },
      {
        displayName: "walksPer9Inn",
        stat: "Walks per 9 Innings",
      },
      {
        displayName: "wildPitch",
        stat: "Wild Pitch",
      },
      {
        displayName: "winPercentage",
        stat: "Win Percentage",
      },
      {
        displayName: "wins",
        stat: "Wins",
      },
    ],
  ];
  const [leadersLoading, setLeadersLoading] = useState(false);

  let selectedCategory = "Home Runs";
  let selectedState = "R";
  let selectedSeason = new Date().getFullYear();

  const fetchStatCategories = useCallback(async () => {
    const response = await fetch("/api/mlb/teamleaders/categories");
    if (!response.ok) {
      throw new Error("Team could not get retrieved!");
    } else {
      const data = await response.json();
      categories = data;
    }
    setCategoriesLoading(true);
  }, []);

  useEffect(() => {
    fetchLeaders();
  }, []);

  return (
    <div>
      <div>
        <span>{team.name} Team Stat Leaders</span>
        <form>
          <select></select>
          <select></select>
          <input type="number"></input>
          <button>Search</button>
        </form>
      </div>
      <StatsTable />
    </div>
  );
};

export default TeamStatLeaders;
