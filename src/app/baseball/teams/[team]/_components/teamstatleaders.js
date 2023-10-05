"use client";

import StatsTable from "./_statleaders/statstable";
import styles from "./teamstatleaders.module.css";

import { useState, useCallback, useEffect } from "react";

const TeamStatLeaders = ({ team }) => {
  const teamID = team.id;
  let categories = [
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
  ];
  const [leadersLoading, setLeadersLoading] = useState(true);
  const [statLeaders, setStatLeaders] = useState([]);
  const [statSeason, setStatSeason] = useState(new Date().getFullYear());

  let selectedCategory = "HomeRuns";
  let selectedGroup = "R";
  let seasonMax = new Date().getFullYear();

  const fetchStatLeaders = useCallback(
    async (category, group, season, teamID) => {
      const response = await fetch(
        `/api/mlb/team/${teamID}/stats/${category}/${season}/${group}/5`
      );
      if (!response.ok) {
        throw new Error("Stat leaders could not get retrieved!");
      } else {
        const data = await response.json();
        setStatLeaders(data);
      }
      setLeadersLoading(false);
    },
    []
  );

  useEffect(() => {}, []);

  const statLeaderSearchHandler = (event) => {
    event.preventDefault();
    selectedCategory = event.target[0].value;
    selectedGroup = event.target[1].value;
    fetchStatLeaders(selectedCategory, selectedGroup, statSeason, teamID);
  };

  const yearChangeHandler = (event) => {
    setStatSeason(event.target.value);
  };

  return (
    <div className={styles["stat-leaders-container"]}>
      <div className={styles["stat-search-container"]}>
        <h2 className={styles["stat-search-name"]}>Stat Leaders</h2>
        <form
          onSubmit={statLeaderSearchHandler}
          className={styles["stat-search-form"]}
        >
          <div className={styles["form-item"]}>
            <label htmlFor="stats-category-selector">Stat Category: </label>
            <select name="stats-category-selector" id="stats-category-selector">
              {categories.map((category) => {
                let categoryValue = category.displayName;
                let categoryDisplayName = category.stat;
                return (
                  <option key={categoryValue} value={categoryValue}>
                    {categoryDisplayName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles["form-item"]}>
            <label htmlFor="stat-group-selector">Stat Type: </label>
            <select name="stat-group=selector">
              <option value="R">Regular Season</option>
              <option value="P">Post Season</option>
              <option value="S">Spring Training</option>
            </select>
          </div>
          <div className={styles["form-item"]}>
            <label htmlFor="stat-season-input">Season: </label>
            <input
              name="stat-season-input"
              type="number"
              min="1900"
              max={seasonMax}
              placeholder={seasonMax}
              size="4"
              value={statSeason}
              onChange={yearChangeHandler}
            ></input>
          </div>
          <button>Search</button>
        </form>
      </div>
      {!leadersLoading && <StatsTable players={statLeaders} team={teamID} />}
      {leadersLoading && <span>Search for team stat leaders!</span>}
    </div>
  );
};

export default TeamStatLeaders;
