// This page will be hard coded for now to only handle MLB score results from the MLB API.
"use client"; // haven't completely figured out best way to use client vs server components in nextjs just yet, probably just need a different component.

import { useCallback, useEffect, useState } from "react";
import ScoreItem from "./scoreitem";

import styles from "./scoretable.module.css";

const ScoreTable = (props) => {
  const [scores, setScores] = useState([]);

  // This will be commented out till the JSON files are corretly parsed. Dummy Date will be used for now.
  const [error, setError] = useState(null);

  const fetchScores = useCallback(async () => {
    try {
      const response = await fetch(
        "/api/mlb/schedule/today"
      );

      if (!response.ok) {
        throw new Error("Scores could not get retrieved!");
      }
      const data = await response.json();
      setScores(data);
    } catch (error) {
      setError(error.message);
    }}, []);

  useEffect(() => {
    fetchScores();
  }, [fetchScores]);

  // useEffect(() => {
  //   setScores([
  //     {
  //       away_id: 109,
  //       away_name: "Arizona Diamondbacks",
  //       away_pitcher_note: "",
  //       away_probable_pitcher: "Merrill Kelly",
  //       away_score: 4,
  //       current_inning: 9,
  //       doubleheader: "N",
  //       game_date: "2023-09-25",
  //       game_datetime: "2023-09-25T17:05:00Z",
  //       game_id: 716471,
  //       game_num: 1,
  //       game_type: "R",
  //       home_id: 147,
  //       home_name: "New York Yankees",
  //       home_pitcher_note: "",
  //       home_probable_pitcher: "Clarke Schmidt",
  //       home_score: 6,
  //       inning_state: "Top",
  //       losing_pitcher: "Kevin Ginkel",
  //       losing_team: "Arizona Diamondbacks",
  //       national_broadcasts: ["MLBN (out-of-market only)"],
  //       save_pitcher: "Clay Holmes",
  //       series_status: "NYY wins 2-1",
  //       status: "Final",
  //       summary:
  //         "2023-09-25 - Arizona Diamondbacks (4) @ New York Yankees (6) (Final)",
  //       venue_id: 3313,
  //       venue_name: "Yankee Stadium",
  //       winning_pitcher: "Ian Hamilton",
  //       winning_team: "New York Yankees",
  //     },
  //     {
  //       away_id: 140,
  //       away_name: "Texas Rangers",
  //       away_pitcher_note: "",
  //       away_probable_pitcher: "Jon Gray",
  //       away_score: "0",
  //       current_inning: "",
  //       doubleheader: "N",
  //       game_date: "2023-09-25",
  //       game_datetime: "2023-09-26T01:38:00Z",
  //       game_id: 716440,
  //       game_num: 1,
  //       game_type: "R",
  //       home_id: 108,
  //       home_name: "Los Angeles Angels",
  //       home_pitcher_note: "",
  //       home_probable_pitcher: "Patrick Sandoval",
  //       home_score: "0",
  //       inning_state: "",
  //       national_broadcasts: [],
  //       series_status: null,
  //       status: "Scheduled",
  //       summary: "2023-09-25 - Texas Rangers @ Los Angeles Angels (Scheduled)",
  //       venue_id: 1,
  //       venue_name: "Angel Stadium",
  //     },
  //     {
  //       away_id: 117,
  //       away_name: "Houston Astros",
  //       away_pitcher_note: "",
  //       away_probable_pitcher: "Justin Verlander",
  //       away_score: "0",
  //       current_inning: "",
  //       doubleheader: "N",
  //       game_date: "2023-09-25",
  //       game_datetime: "2023-09-26T01:40:00Z",
  //       game_id: 716436,
  //       game_num: 1,
  //       game_type: "R",
  //       home_id: 136,
  //       home_name: "Seattle Mariners",
  //       home_pitcher_note: "",
  //       home_probable_pitcher: "Luis Castillo",
  //       home_score: "0",
  //       inning_state: "",
  //       national_broadcasts: ["MLBN (out-of-market only)"],
  //       series_status: null,
  //       status: "Scheduled",
  //       summary: "2023-09-25 - Houston Astros @ Seattle Mariners (Scheduled)",
  //       venue_id: 680,
  //       venue_name: "T-Mobile Park",
  //     },
  //   ]);
  // }, []);

  console.log(scores);
  return (
    <div className={styles.scoretable}>
      {scores.length !== 0 ? (
        scores.map((score) => (
          <ScoreItem score={score} key={score["game_id"]} />
        ))
      ) : (
        <span>No Games Today</span>
      )}
    </div>
  );
};

export default ScoreTable;
