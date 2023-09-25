//Currently will be hardcoded for baseball/MLB. Will need to be updated to be dynamic for all sports/leagues.

import styles from "./scoreitem.module.css";

const ScoreItem = (props) => {
  const score = props.score;

  let displayScores = false;
  const gameTime = new Date(score["game_datetime"]);
  let status = score['status'];
  if (status !== "In Progress") { 
    displayScores = true;
    status = score['inning_state'] + " " + score['current_inning'];
  }
  
  // const awayRecord = fetch("/api/mlb/record/" + score["away_id"]);
  return (
    <div className={styles["score-item"]}>
      <div className="status"></div>
      <div className={styles.score}>
        <div className="away-name">{score["away_name"]}</div>
        <div className={styles["away-score"]}>{score["away_score"]}</div>
      </div>
      <div className={styles.score}>
        <div className="home-name">{score["home_name"]}</div>
        <div className={styles["home-score"]}>{score["home_score"]}</div>
      </div>
    </div>
  );
};

export default ScoreItem;
