import styles from "./verbosescoreitem.module.css";

import Link from "next/link";

const VerboseScoreItem = ({ score }) => {
  let displayScores = false;
  const gameTime = new Date(score["game_datetime"]);

  let status = score['status'];

  if (status === "In Progress") { 
    displayScores = true;
    status = score['inning_state'] + " " + score['current_inning'];
  }
  
  // const awayRecord = fetch("/api/mlb/record/" + score["away_id"]);

  let pitchingContent;

  if (status === "Final") {
    pitchingContent = (<div></div>);
  }
  else {
    pitchingContent = (<div></div>)
  }

  return (
    <div className={styles["score-item"]}>
      <Link href={`/baseball/games/${score["game_id"]}`} className={styles["status"]}>{status}</Link>
      <div className={styles["score"]}>
        <Link href={`/baseball/teams/${score["away_id"]}`} className={styles["away-name"]}>{score["away_name"]}</Link>
        <div className={styles["away-score"]}>{score["away_score"]}</div>
      </div>
      <div className={styles["score"]}>
        <Link href={`/baseball/teams/${score["home_id"]}`} className={styles["home-name"]}>{score["home_name"]}</Link>
        <div className={styles["home-score"]}>{score["home_score"]}</div>
      </div>
      <div className={styles["verbose"]}>
        <div className={styles["pitching-container"]}>
          {pitchingContent}
        </div>
      </div>
    </div>
  );
};

export default VerboseScoreItem;