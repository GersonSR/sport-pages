import { Fragment } from "react";

import styles from "./statstable.module.css";

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
    atBatsPerHomeRun: {
      displayName: "At Bats per Home Run",
      stat: "atBatsPerHomeRun",
    },
    avg: {
      displayName: "Batting Average",
      stat: "avg",
    },
    babip: {
      displayName: "Batting Average on Balls in Play (BABIP)",
      stat: "babip",
    },
    balls: {
      displayName: "Balls",
      stat: "balls",
    },
    balks: {
      displayName: "Balks",
      stat: "balks",
    },
    balk: {
      displayName: "Balk",
      stat: "balk",
    },
    baseOnBalls: {
      displayName: "Base on Balls (BB)",
      stat: "baseOnBalls",
    },
    battersFaced: {
      displayName: "Batters Faced",
      stat: "battersFaced",
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
    earnedRuns: {
      displayName: "Earned Runs",
      stat: "earnedRuns",
    },
    earnedRunAverage: {
      stat: "earnedRunAverage",
      displayName: "Earned Run Average (ERA)",
    },
    era: {
      stat: "era",
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
    fielding: {
      stat: "fielding",
      displayName: "Fielding",
    },
    fieldingPercentage: {
      stat: "fieldingPercentage",
      displayName: "Fielding Percentage",
    },
    flyouts: {
      stat: "flyouts",
      displayName: "Flyouts",
    },
    games: {
      stat: "games",
      displayName: "Games",
    },
    gamesPitched: {
      stat: "gamesPitched",
      displayName: "Games Pitched",
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
    groundIntoDoublePlay: {
      stat: "groundIntoDoublePlay",
      displayName: "Ground Into Double Play",
    },
    groundoutToFlyoutRatio: {
      stat: "groundoutToFlyoutRatio",
      displayName: "Groundout to Flyout Ratio",
    },
    groundOuts: {
      stat: "groundOuts",
      displayName: "Ground Outs",
    },
    groundOutsToAirouts: {
      stat: "groundOutsToAirouts",
      displayName: "Ground Outs to Air Outs",
    },
    hitByPitch: {
      stat: "hitByPitch",
      displayName: "Hit by Pitch",
    },
    hitByPitches: {
      stat: "hitByPitches",
      displayName: "Hit by Pitches",
    },
    hitBatsman: {
      stat: "hitBatsman",
      displayName: "Hit Batsman",
    },
    hitBatsmen: {
      stat: "hitBatsmen",
      displayName: "Hit Batsmen",
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
    homeRunsPer9: {
      stat: "homeRunsPer9",
      displayName: "Home Runs per 9 Innings",
    },
    innings: {
      stat: "innings",
      displayName: "Innings",
    },
    inheritedRunners: {
      stat: "inheritedRunners",
      displayName: "Inherited Runners",
    },
    inheritedRunnersScored: {
      stat: "inheritedRunnersScored",
      displayName: "Inherited Runners Scored",
    },
    inningsPitched: {
      stat: "inningsPitched",
      displayName: "Innings Pitched",
    },
    intentionalWalks: {
      stat: "intentionalWalks",
      displayName: "Intentional Walks",
    },
    leftOnBase: {
      stat: "leftOnBase",
      displayName: "Left on Base",
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
    obp: {
      stat: "obp",
      displayName: "On Base Percentage (OBP)",
    },
    outs: {
      stat: "outs",
      displayName: "Outs",
    },
    ops: {
      stat: "ops",
      displayName: "On Base Plus Slugging (OPS)",
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
    plateAppearances: {
      stat: "plateAppearances",
      displayName: "Plate Appearances",
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
    rbi: {
      stat: "rbi",
      displayName: "Runs Batted In (RBI)",
    },
    runsBattedIn: {
      stat: "runsBattedIn",
      displayName: "Runs Batted In (RBI)",
    },
    runs: {
      stat: "runs",
      displayName: "Runs",
    },
    runsScoredPer9: {
      stat: "runsScoredPer9",
      displayName: "Runs Scored per 9 Innings",
    },
    sacBunts: {
      stat: "sacBunts",
      displayName: "Sacrifice Bunts",
    },
    sacrificeBunts: {
      stat: "sacrificeBunts",
      displayName: "Sacrifice Bunts",
    },
    sacFlies: {
      stat: "sacFlies",
      displayName: "Sacrifice Flies",
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
    slg: {
      stat: "slg",
      displayName: "Slugging Percentage (SLG)",
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
    strikes: {
      stat: "strikes",
      displayName: "Strikes",
    },
    strikeOuts: {
      stat: "strikeOuts",
      displayName: "Strike Outs",
    },
    strikePercentage: {
      stat: "strikePercentage",
      displayName: "Strike Percentage",
    },
    strikeouts: {
      stat: "strikeouts",
      displayName: "Strikeouts",
    },
    strikeoutsPer9Inn: {
      stat: "strikeoutsPer9Inn",
      displayName: "Strikeouts per 9 Innings",
    },
    strikeoutWalkRatio: {
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
    triplePlays: {
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
    whip: {
      stat: "whip",
      displayName: "Walks and Hits per Inning Pitched (WHIP)",
    },
    wildPitches: {
      stat: "wildPitches",
      displayName: "Wild Pitches",
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
    if (props.stats === undefined) {
      return;
    }
    for (let i = 0; i < props.stats.length; i++) {
      if (props.stats[i].group.displayName === props.type) {
        statArray = props.stats[i].splits;
      }
    }
    if (statArray.length === 0) {
      return;
    }
    if (statArray.length === 1) {
      if (category === "Fielding") {
        statObjects.push({ position: statArray[0].position.abbreviation, stats: statArray[0].stat });
      } else {
        statObjects.push({ position: category, stats: statArray[0].stat });
      }
    } else if (statArray.length > 1) {
      for (let i = 0; i < statArray.length; i++) {
        if (category === "Fielding") {
          statObjects.push({position: statArray[i].position.abbreviation, stats: statArray[i].stat });
        } else {
          statObjects.push({position: category, stats: statArray[i].stat });
        }
      }
    }
  };


  const YearByYearFunction = () => {
    if (props.stats === undefined) {
      return;
    }
    for (let i = 0; i < props.stats.length; i++) {
      if (props.stats[i].group.displayName === props.type) {
        statArray = props.stats[i].splits;
      }
    }
    if (statArray.length === 0) {
      return;
    }
    if (statArray.length === 1) {
      if (category === "Fielding") {
        statObjects.push({ year: statArray[0].season, position: statArray[0].position.abbreviation, stats: statArray[0].stat });
      } else {
        statObjects.push({ year: statArray[0].season, position: category, stats: statArray[0].stat });
      }
    } else if (statArray.length > 1) {
      for (let i = 0; i < statArray.length; i++) {
        if (category === "Fielding") {
          statObjects.push({ year: statArray[i].season, position: statArray[i].position.abbreviation, stats: statArray[i].stat });
        } else {
          statObjects.push({ year: statArray[i].season, position: category, stats: statArray[i].stat });
        }
      }
    }

    return 1;
  };


  if (props.grouping === "career") {
    careerFunction();
  } else {
    YearByYearFunction();
  }

  // console.log(statObjects);
  let statCount = statObjects.length;
  return (
    <Fragment>
      {statObjects.length < 1 && (
        <div className={styles["category"]}>No {category} Stats Avaliable</div>
      )}
      {statObjects.length > 0 && (
        <Fragment>
          <div className={styles["category"]}>{category}</div>
          <div className={styles["stats-table"]}>
            <table>
              <thead>
                <tr>
                  {(groupingType === "YearByYear" || groupingType === "season") &&
                    <th>Year</th>}
                  {(category === "Fielding") && <th>Position</th>}
                  {Object.keys(statObjects[0].stats).map((key) => {
                    let category = "";
                    if (key in nameLibrary) {
                      category = nameLibrary[key].displayName;
                    } else {
                      category = key;
                    }

                    if (key === "position") {
                      return;
                    }
                    return <th key={key + "head"}>{category}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {statObjects.map((statObject) => {
                  return (
                    <tr key={statObject.position + statObject.year + Math.random()}>
                      {(groupingType === "YearByYear" || groupingType === "season") &&
                        <td>{statObject.year}</td>}
                      {(category === "Fielding") && <td>{statObject.position}</td>}
                      {Object.keys(statObject.stats).map((key) => {
                        let stat = statObject.stats[key];
                        if (typeof stat === "object") {
                          return;
                        }
                        return <td key={key + key + statObject.position + statObject.year}>{stat}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default StatsTable;
