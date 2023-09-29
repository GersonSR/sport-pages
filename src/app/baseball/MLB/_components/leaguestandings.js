import styles from "./leaguestandings.module.css";

import DivisionStandings from "./divisionstandings.js";
import { useContext } from "react";
import { MLBContext } from "../_context/mlbcontext";

const LeagueStandings = (props) => {
  const MLB = useContext(MLBContext);
  return (
    <div className={styles["league-standings"]}>
        <h2>Current Divisional Standings</h2>
          <div className={styles["league"]}>
            <DivisionStandings division={MLB.standings["200"]}></DivisionStandings>
          </div>
          <div className={styles["league"]}>
            <div className={styles["division"]}>
            </div>
          </div>
    </div>
  );
}

export default LeagueStandings;