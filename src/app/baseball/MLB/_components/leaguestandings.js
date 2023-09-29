"use client";

import styles from "./leaguestandings.module.css";

import DivisionStandings from "./divisionstandings.js";
import { Fragment, useContext, useEffect, useState } from "react";
import { MLBContext } from "../_context/mlbcontext";

const LeagueStandings = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const MLB = useContext(MLBContext);
  const checkMLM = () => {
    if (MLBContext === undefined) setIsLoaded(false);
    else setIsLoaded(true);
  };

  useEffect(() => {
    checkMLM();
  }, [MLB]);

  return (
    <Fragment>
      <h2 className={styles["league-header"]}>Current Divisional Standings</h2>
      {isLoaded ? (
        <div className={styles["league-standings"]}>
          <div className={styles["league"]}>
            <DivisionStandings
              division={MLB.standings["200"]}
            ></DivisionStandings>
            <DivisionStandings
              division={MLB.standings["201"]}
            ></DivisionStandings>
            <DivisionStandings
              division={MLB.standings["202"]}
            ></DivisionStandings>
          </div>
          <div className={styles["league"]}>
            <DivisionStandings
              division={MLB.standings["203"]}
            ></DivisionStandings>
            <DivisionStandings
              division={MLB.standings["204"]}
            ></DivisionStandings>
            <DivisionStandings
              division={MLB.standings["205"]}
            ></DivisionStandings>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
};

export default LeagueStandings;
