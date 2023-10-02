"use client"

import TeamInfo from "./_components/teaminfo";
import TeamRoster from "./_components/teamroster";
import TeamStatLeaders from "./_components/teamstatleaders";
import styles from "./page.module.css";
import { Fragment, useCallback, useEffect, useState } from "react";

const TeamPage = ({params}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [teamData, setTeamData] = useState([]);

  const teamID = params.team;
  const fetchTeamData = useCallback(async () => {
    try {
      const response = await fetch(`/api/mlb/team/${teamID}`);
      if (!response.ok) {
        throw new Error("Team could not get retrieved!");
      }
      else {
        const data = await response.json();
        setTeamData(data);
      }
      setIsLoaded(true);
    } catch (error) {
      console.log(error.message);
    }
  }, [teamID]);

  useEffect(() => {
    fetchTeamData();
  }, [fetchTeamData]);

  let teamObject = {};
  if (teamData.length > 0) { 
     teamObject = teamData[0];
  }
  return (
    <main className={styles.main}>
      {!isLoaded && <div>Loading...</div>}
      {isLoaded && (teamData.length > 0) && (
        <div className={styles["team-container"]}>
          <TeamInfo team={teamObject} />
          <TeamRoster team={teamObject} />
          <TeamStatLeaders team={teamObject} />
        </div>
      )}
    </main>
  );
}

export default TeamPage;