"use client";

import { Fragment, useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";

import PlayerContainer from "./_components/playercontainer";
import PlayerStats from "./_components/playerstats";
import PlayerInfo from "./_components/playerinfo";

const BBPlayerPage = ({ params }) => {
  const [playerData, setPlayerData] = useState(null);
  const [playerInfo, setPlayerInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statsType, setStatsType] = useState("career");

  const playerID = params.player;

  const fetchPlayerInfo = useCallback(async () => {
    setLoading(true);
    try {
      let response;
      if (statsType === "career") {
        response = await fetch(`/api/mlb/player/info/${playerID}`);
      } else if (statsType === "YearByYear") {
        response = await fetch (`/api/mlb/player/info/yby/${playerID}/`);
      } else if (statsType === "season") {
        response = await fetch (`/api/mlb/player/info/${playerID}/season/2023/`);
      } else {
        response = await fetch(`/api/mlb/player/info/${playerID}`);
      }
      if (!response.ok) {
        throw new Error("Player stats could not get retrieved!");
      }
      else {
        const data = await response.json();
        setPlayerData(data);
      }
      const response2 = await fetch(`/api/mlb/person/${playerID}`);
      if (!response2.ok) {
        throw new Error("Player info could not get retrieved!");
      }
      else {
        const data2 = await response2.json();
        setPlayerInfo(data2);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }, [playerID, statsType]);

  useEffect(() => {
    fetchPlayerInfo();
  }, []);

  return (
    <Fragment>
      {loading && !error && <div>It's loading!</div>}
      {!loading && !error && playerData && playerInfo &&
        <PlayerContainer>
          <PlayerInfo player={playerInfo}/>
          <form className={styles["form"]}>
            <select>
              <option>Career</option>
              <option>Year By Year</option>
            </select>
          </form>
          <PlayerStats player={playerData} grouping={statsType}/>
        </PlayerContainer>}
    </Fragment>
  );
};

export default BBPlayerPage;
