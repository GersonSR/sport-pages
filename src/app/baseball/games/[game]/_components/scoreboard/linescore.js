import { GameContext } from "../../layout";
import { useContext } from "react";
import Link from "next/link";


import styles from "./linescore.module.css";


const LineScore = () => {
  const { game, loading, error } = useContext(GameContext);

  // Retrieve team info
  const awayTeam = game["teams"]["away"];
  const homeTeam = game["teams"]["home"];

  //Retrieve linescore totals
  const homeTotals = game["linescore"]["teams"]["home"];
  const awayTotals = game["linescore"]["teams"]["away"];

  //Retrieve linescore innings
  const innings = game["linescore"]["innings"];

  // Determine how many innings to display, if there are more than 9 innings, display all innings
  let inningsCreation = 9;
  let providedInnningsTotal = 0;
  if (innings != undefined) {
    providedInnningsTotal = innings.length;
    if (providedInnningsTotal > 9) {
      inningsCreation = providedInnningsTotal;
    }
  }

  // Create the linescore intro
  let linescoreIntro =
    <div className={styles["teams-info"]}>
      <div className={styles["names"]}>Teams</div>
      <div className={styles["name-link"]}>
        <Link
          className={styles["team-link"]}
          href={`/baseball/teams/${awayTeam["id"]}`}
        >
          {awayTeam["name"]}
        </Link>
      </div>
      <div className={styles["name-link"]}>
        <Link
          className={styles["team-link"]}
          href={`/baseball/teams/${homeTeam["id"]}`}
        >
          {homeTeam["name"]}
        </Link>
      </div>
    </div>;

  // Create the inning boxes, with a minimum of 9 innings, providing a template for non-played innings
  let inningBoxContent = [];
  for (let i = 0; i < inningsCreation; i++) {
    if (i < providedInnningsTotal) {
      inningBoxContent.push({
        inning: i + 1,
        away: innings[i]["away"]["runs"],
        home: innings[i]["home"]["runs"],
      });
    } else {
      inningBoxContent.push({
        inning: i + 1,
        away: "-",
        home: "-",
      });
    }
  }

  // Linescore winner
  let winningTeam = "";
  if (homeTotals.runs < awayTotals.runs) {
    winningTeam = "away";
  } else if (homeTotals.runs > awayTotals.runs) {
    winningTeam = "home";
  } else {
    winningTeam = "tie";
  }

  // Format the linescore totals
  const linescoreTotals = (
    <div className={styles["linescore-totals"]}>
      <div className={styles["inning-column"]}>
        <div className={styles["inning-number"]}>R</div>
        <div className={`${styles["total-score"]} ${(winningTeam === "away") ? styles["winning-score"] : ""}`}>{awayTotals.runs}</div>
        <div className={`${styles["total-score"]} ${(winningTeam === "home") ? styles["winning-score"] : ""}`}>{homeTotals.runs}</div>
      </div>
      <div className={styles["inning-column"]}>
        <div className={styles["inning-number"]}>H</div>
        <div className={styles["total-score"]}>{awayTotals.hits}</div>
        <div className={styles["total-score"]}>{homeTotals.hits}</div>
      </div>
      <div className={styles["inning-column"]}>
        <div className={styles["inning-number"]}>E</div>
        <div className={styles["total-score"]}>{awayTotals.errors}</div>
        <div className={styles["total-score"]}>{homeTotals.errors}</div>
      </div>
    </div>
  );




  return (
    <div className={styles["linescore"]}>
      {linescoreIntro}
      <div className={styles["innings-breakdown"]}>{
        inningBoxContent.map((inning) => {
          return (
            <div className={styles["inning-column"]} key={inning.inning}>
              <div className={styles["inning-number"]}>{inning.inning}</div>
              <div className={styles["inning-score"]}>{inning.away}</div>
              <div className={styles["inning-score"]}>{inning.home}</div>
            </div>
          );
        })
      }</div>
      {linescoreTotals}
    </div>
  );
};

export default LineScore;
