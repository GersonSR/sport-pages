import { Fragment } from "react";

const StatsTable = (props) => {
  const category = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  const groupingType = props.grouping;

  let statArray = [];
  const statObjects = [];
  const nameLibrary = {
    airOuts: {
      displayName: "Air Outs",
      stat: "airOuts",
    },
    assists: {
      displayName: "Assists",
      stat: "assits",
    },
    atBats: {
      displayName: "At Bats",
      stat: "atBats",
    },
    balk: {
      displayName: "Balk",
      stat: "balk",
    },
    battingAverage: {
      displayName: "Batting Average",
      stat: "battingAverage",
    },
    blownSaves: {
      displayName: "Blown Saves",
      stat: "blownSaves",
    },
    catcherEarnedRunAverage: {
      displayName: "Catcher Earned Run Average",
      stat: "catcherEarnedRunAverage",
    },
    catchersInterference: {
      displayName: "Catchers Interference",
      stat: "catchersInterference",
    },
    caughtStealing: {
      stat: "caughtStealing",
      displayName: "Caught Stealing",
    },
    chances: {
      stat: "chances",
      displayName: "Chances",
    },
    completeGames: {
      stat: "completeGames",
      displayName: "Complete Games",
    },
    doublePlays: {
      stat: "doublePlays",
      displayName: "Double Plays",
    },
    doubles: {
      stat: "doubles",
      displayName: "Doubles",
    },
    earnedRun: {
      stat: "earnedRun",
      displayName: "Earned Run",
    },
    earnedRunAverage: {
      stat: "earnedRunAverage",
      displayName: "Earned Run Average (ERA)",
    },
    errors: {
      stat: "errors",
      displayName: "Errors",
    },
    extraBaseHits: {
      stat: "extraBaseHits",
      displayName: "Extra Base Hits",
    },
    fieldingPercentage: {
      stat: "fieldingPercentage",
      displayName: "Fielding Percentage",
    },
    flyouts: {
      stat: "flyouts",
      displayName: "Flyouts",
    },
    gamesFinished: {
      stat: "gamesFinished",
      displayName: "Games Finished",
    },
    gamesPlayed: {
      stat: "gamesPlayed",
      displayName: "Games Played",
    },
    gamesStarted: {
      stat: "gamesStarted",
      displayName: "Games Started",
    },
    groundIntoDoublePlays: {
      stat: "groundIntoDoublePlays",
      displayName: "Ground Into Double Plays",
    },
    groundoutToFlyoutRatio: {
      stat: "groundoutToFlyoutRatio",
      displayName: "Groundout to Flyout Ratio",
    },
    groundOuts: {
      stat: "groundOuts",
      displayName: "Ground Outs",
    },
    hitByPitches: {
      stat: "hitByPitches",
      displayName: "Hit by Pitches",
    },
    hitBatsman: {
      stat: "hitBatsman",
      displayName: "Hit Batsman",
    },
    hits: {
      stat: "hits",
      displayName: "Hits",
    },
    hitsPer9Inn: {
      stat: "hitsPer9Inn",
      displayName: "Hits per 9 Innings",
    },
    holds: {
      stat: "holds",
      displayName: "Holds",
    },
    homeRuns: {
      stat: "homeRuns",
      displayName: "Home Runs",
    },
    innings: {
      stat: "innings",
      displayName: "Innings",
    },
    inningsPitched: {
      stat: "inningsPitched",
      displayName: "Innings Pitched",
    },
    intentionalWalks: {
      stat: "intentionalWalks",
      displayName: "Intentional Walks",
    },
    losses: {
      stat: "losses",
      displayName: "Losses",
    },
    numberOfPitches: {
      stat: "numberOfPitches",
      displayName: "Number of Pitches",
    },
    onBasePercentage: {
      stat: "onBasePercentage",
      displayName: "On Base Percentage (OBP)",
    },
    onBasePlusSlugging: {
      stat: "onBasePlusSlugging",
      displayName: "On Base Plus Slugging (OPS)",
    },
    onfieldAssists: {
      stat: "outfieldAssists",
      displayName: "Outfield Assists",
    },
    passedBalls: {
      stat: "passedBalls",
      displayName: "Passed Balls",
    },
    pickoffs: {
      stat: "pickoffs",
      displayName: "Pickoffs",
    },
    pitchesPerInning: {
      stat: "pitchesPerInning",
      displayName: "Pitches per Inning",
    },
    putOuts: {
      stat: "putOuts",
      displayName: "Put Outs",
    },
    rangeFactorPerGame: {
      stat: "rangeFactorPerGame",
      displayName: "Range Factor per Game",
    },
    rangeFactorPer9Inn: {
      stat: "rangeFactorPer9Inn",
      displayName: "Range Factor per 9 Innings",
    },
    runsBattedIn: {
      stat: "runsBattedIn",
      displayName: "Runs Batted In (RBI)",
    },
    runs: {
      stat: "runs",
      displayName: "Runs",
    },
    sacrificeBunts: {
      stat: "sacrificeBunts",
      displayName: "Sacrifice Bunts",
    },
    sacrificeFlies: {
      stat: "sacrificeFlies",
      displayName: "Sacrifice Flies",
    },
    saveOpportunities: {
      stat: "saveOpportunities",
      displayName: "Save Opportunities",
    },
    saves: {
      stat: "saves",
      displayName: "Saves",
    },
    shutouts: {
      stat: "shutouts",
      displayName: "Shutouts",
    },
    sluggingPercentage: {
      stat: "sluggingPercentage",
      displayName: "Slugging Percentage (SLG)",
    },
    stolenBasePercentage: {
      stat: "stolenBasePercentage",
      displayName: "Stolen Base Percentage",
    },
    stolenBases: {
      stat: "stolenBases",
      displayName: "Stolen Bases",
    },
    strikeouts: {
      stat: "strikeouts",
      displayName: "Strikeouts",
    },
    strikeoutsPer9Inn: {
      stat: "strikeoutsPer9Inn",
      displayName: "Strikeouts per 9 Innings",
    },
    strikeoutWalkRation: {
      stat: "strikeoutWalkRatio",
      displayName: "Strikeout/Walk Ratio",
    },
    throwingErrors: {
      stat: "throwingErrors",
      displayName: "Throwing Errors",
    },
    totalBases: {
      stat: "totalBases",
      displayName: "Total Bases",
    },
    totalBattersFaced: {
      stat: "totalBattersFaced",
      displayName: "Total Batters Faced",
    },
    totalPlateAppearances: {
      stat: "totalPlateAppearances",
      displayName: "Total Plate Appearances",
    },
    triplePlayes: {
      stat: "triplePlays",
      displayName: "Triple Plays",
    },
    triples: {
      stat: "triples",
      displayName: "Triples",
    },
    walks: {
      stat: "walks",
      displayName: "Walks",
    },
    walksAndHitsPerInningPitched: {
      stat: "walksAndHitsPerInningPitched",
      displayName: "Walks and Hits per Inning Pitched (WHIP)",
    },
    walksPer9Inn: {
      stat: "walksPer9Inn",
      displayName: "Walks per 9 Innings",
    },
    wildPitch: {
      stat: "wildPitch",
      displayName: "Wild Pitch",
    },
    winPercentage: {
      stat: "winPercentage",
      displayName: "Win Percentage",
    },
    wins: {
      stat: "wins",
      displayName: "Wins",
    },
  };

  const careerFunction = () => {
    for (let i = 0; i < props.stats.length; i++) {
      if (props.stats[i].group.displayName === props.type) {
        statArray = props.stats[i].splits;
      }
    }
    if (statArray.length === 0) {
      return;
    }
    if (statArray.length === 1) {
      statObjects.push({ position: category, stats: statArray[0].stat });
    } else {
      for (let i = 0; i < statArray.length; i++) {
        statObjects.push({
          position: statArray[i].position.abbreviation,
          stats: statArray[0].stat,
        });
      }
    }
  };

  if (props.grouping === "career") {
    careerFunction();
  }

  console.log(statObjects);
  let statCount = statObjects.length;
  return (
    <Fragment>
      {statCount < 1 && <div>No {category} Stats Avaliable</div>}
      {statCount > 0 && (
        <div>
          {statObjects.map((statObject) => {
            let content = (
              <table key={statObject.position}>
                <caption>{category}</caption>
                <thead>
                  <tr>
                    <th>
                      {groupingType.charAt(0).toUpperCase() +
                        groupingType.slice(1)}
                    </th>
                    {Object.keys(statObject.stats).map((key) => {
                      let category = "";
                      if (key in nameLibrary) {
                        category = nameLibrary[key].displayName;
                      } else {
                        category = key;
                      }

                      if (key === "position") {
                        return 
                      }
                      return <th key={key}>{category}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    {Object.keys(statObject.stats).map((key) => {
                      let stat = statObject.stats[key];
                      if (typeof stat === "object") {
                        return
                      }
                      return <td key={key}>{stat}</td>;
                    })}
                  </tr>
                </tbody>
              </table>
            );
            return content;
          })}
        </div>
      )}
    </Fragment>
  );
};

export default StatsTable;
