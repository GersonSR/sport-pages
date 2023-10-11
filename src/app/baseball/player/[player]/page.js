"use client";

import { Fragment, useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";

import PlayerContainer from "./_components/playercontainer";
import PlayerStats from "./_components/playerstats";
import PlayerInfo from "./_components/playerinfo";

const BBPlayerPage = ({ params }) => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const playerID = params.player;

  const fetchTeamData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/mlb/player/info/${playerID}`);
      if (!response.ok) {
        throw new Error("Player could not get retrieved!");
      }
      else {
        const data = await response.json();
        setPlayerData(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [playerID]);

  useEffect(() => {
    fetchTeamData();
  }, []);

  console.log(playerData);

  return (
    <Fragment>
      {!loading && !error && <div>It's loading!</div>}
      {loading && !error && 
        <PlayerContainer>
          <PlayerInfo/>
          <PlayerStats/>
        </PlayerContainer>}
    </Fragment>
  );
};

export default BBPlayerPage;
