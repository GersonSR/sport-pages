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

  let inningsCreation = 9;
  let providedInnningsTotal = 0;
  if (innings != undefined) {
    providedInnningsTotal = innings.length;
    if (providedInnningsTotal > 9) {
      inningsCreation = providedInnningsTotal;
    }
  }
  let linescoreIntro = 
    <div className={styles.inningBox}>
      <div className={styles.inning}>Teams</div>
      <div>
        <Link
          className={styles["team-link"]}
          href={`/baseball/teams/${awayTeam["id"]}`}
        >
          {awayTeam["name"]}
        </Link>
      </div>
      <div>
        <Link
          className={styles["team-link"]}
          href={`/baseball/teams/${homeTeam["id"]}`}
        >
          {homeTeam["name"]}
        </Link>
      </div>
    </div>;

  let inningBoxContent = [];
  for (let i = 0; i < inningsCreation; i++) {
    if (i < providedInnningsTotal) {
        inningBoxContent.push( {
            inning: i + 1,
            away: innings[i]["away"]["runs"],
            home: innings[i]["home"]["runs"],
        });
    } else {
        inningBoxContent.push( {
            inning: i + 1,
            away: "-",
            home: "-",
        });
    }
  }

  console.log(inningBoxContent);

  return (
    <div className="linescore">
      {linescoreIntro}
    </div>
  );
};

export default LineScore;
