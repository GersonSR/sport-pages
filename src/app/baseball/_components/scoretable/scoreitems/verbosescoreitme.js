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


  // Additional Pitching Content
  let pitchingContent;

  if (status === "Final") {
    let savingPitcher
    if (("save_pitcher" in score) &&(score["save_pitcher"] !== "" && score["save_pitcher"] !== null)) {
      savingPitcher = (
        <div className={styles["pitcher-info"]}>SV:{' '}{score["save_pitcher"]}</div>
      );
    }
    pitchingContent = (
        <div className={styles["pitching-content"]}>
            <div className={styles["pitcher-info"]}>WP:{' '}{score["winning_pitcher"]}</div>
            <div className={styles["pitcher-info"]}>LP:{' '}{score["losing_pitcher"]}</div>
            {savingPitcher}
        </div>
      );
  } else {
    pitchingContent = (
      <div className={styles["pitching-content"]}>
        <div>Probable Pitchers:</div>
        <div className={styles["pitcher-info"]}>Away Starter:{' '}{score["away_probable_pitcher"]}</div>
        <div className={styles["pitcher-info"]}>Home Starter:{' '}{score["home_probable_pitcher"]}</div>
      </div>
    );
  }

  // Further Additional Content
  let additionalContent;


  const gameTypeInfo = {
    "R": "Regular Season",
    "S": "Spring Training",
    "F": "Wild Card Game",
    "D": "Division Series",
    "L": "League Championship Series",
    "W": "World Series",
    "C": "Championship Game",
    "N": "Nineteenth Century Series",
    "P": "Playoff",
    "A": "All-Star Game",
    "I": "Intrasquad Game",
    "E": "Exhibition Game",
  }

  let gameType = (<div className={styles["game-type"]  + " " + styles["additional-content"]}>{gameTypeInfo[score["game_type"]]}</div>);



  let doubleHeaderContent;

  if (score["doubleheader"] === "Y") {
    doubleHeaderContent = (
      <div className={styles["doubleheader"] + " " + styles["additional-content"]}>Doubleheader</div>
    );
  } else if (score["doubleheader"] === "S") {
    doubleHeaderContent = (
      <div className={styles["doubleheader"] + " " + styles["additional-content"]}>Doubleheader (Split Ticket)</div>
    );
  }

  additionalContent = (
    <div className={styles["additional-content-container"]}>
      <div className={styles["additional-title"]}>Additional Game Info:</div>
      {gameType}
      {doubleHeaderContent}
    </div>
  );

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
        <div className={styles["additional-info"]}>
          {additionalContent}
        </div>
      </div>
    </div>
  );
};

export default VerboseScoreItem;