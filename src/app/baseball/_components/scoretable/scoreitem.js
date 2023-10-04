//Currently will be hardcoded for baseball/MLB. Will need to be updated to be dynamic for all sports/leagues.

import { useEffect } from "react";
import styles from "./scoreitem.module.css";
import Link from "next/link";

const ScoreItem = (props) => {
  const score = props.score;
  let displayScores = false;
  const gameTime = new Date(score["game_datetime"]);
  let status = score['status'];
  if (status === "In Progress") { 
    displayScores = true;
    status = score['inning_state'] + " " + score['current_inning'];
  }
  
  // const awayRecord = fetch("/api/mlb/record/" + score["away_id"]);
  return (
    <div className={styles["score-item"]}>
      <div className="status">{status}</div>
      <div className={styles.score}>
        <Link href={`/baseball/teams/${score.away_id}`} className={styles["away-name"]}>{score["away_name"]}</Link>
        <div className={styles["away-score"]}>{score["away_score"]}</div>
      </div>
      <div className={styles.score}>
        <Link href={`/baseball/teams/${score.home_id}`} className={styles["home-name"]}>{score["home_name"]}</Link>
        <div className={styles["home-score"]}>{score["home_score"]}</div>
      </div>
    </div>
  );
};

export default ScoreItem;
