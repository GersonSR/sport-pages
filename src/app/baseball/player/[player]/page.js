"use client";

import { Fragment, useState, useEffect, useCallback, useRef } from "react";
import styles from "./page.module.css";

import PlayerContainer from "./_components/playercontainer";
import PlayerStats from "./_components/playerstats";
import PlayerInfo from "./_components/playerinfo";

const BBPlayerPage = ({ params }) => {
  const [playerData, setPlayerData] = useState(null);
  const [playerInfo, setPlayerInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statsType, setStatsType] = useState("career");
  const selectedSeasonRef = useRef(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [playerSeasons, setPlayerSeasons] = useState(null);

  const playerID = params.player;

  const fetchPlayerInfo = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/mlb/player/info/experience/${playerID}`);
      if (!response.ok) {
        throw new Error("Player info could not get retrieved!");
      } else {
        const data = await response.json();
        const seasons = data;
        // console.log(seasons);
        const seasonOptions = seasons.map((season) => {
          return <option key ={season} value={season}>{season}</option>
        });
        setPlayerSeasons(seasonOptions);
        setSelectedSeason(seasons[0]);        
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
  }, [playerID]);

  useEffect(() => {
    fetchPlayerInfo();
  }, []);

  const fetchPlayerStats = useCallback(async () => {
    setStatsLoading(true);
    try {
      // console.log(selectedSeason)
      let response;
      if (statsType === "career") {
        response = await fetch(`/api/mlb/player/info/${playerID}`);
      } else if (statsType === "YearByYear") {
        response = await fetch (`/api/mlb/player/info/yby/${playerID}/`);
      } else if (statsType === "season") {
        response = await fetch (`/api/mlb/player/info/${playerID}/season/${selectedSeason}/`);
      } else {
        response = await fetch(`/api/mlb/player/info/${playerID}`);
      }
      if (!response.ok) {
        throw new Error("Player stats could not get retrieved!");
      }
      else {
        const data = await response.json();
        // console.log(data);
        setPlayerData(data);
      }
    } catch (error) {
      console.log(error.message);
    }
    setStatsLoading(false);
  }, [playerID, statsType, selectedSeason]);
  
  useEffect(() => {
    fetchPlayerStats();
  }, [statsType, selectedSeason]);
  
  const statGroupingSelectionHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    if (event.target.value === "career" || event.target.value === "YearByYear") {
      // console.log(selectedSeasonRef.current);
      selectedSeasonRef.current.style.visibility = "hidden";
      setStatsType(event.target.value);
    } else if (event.target.value === "season") {
      console.log(selectedSeasonRef.current);
      selectedSeasonRef.current.style.visibility = "visible";
      setStatsType(event.target.value);
    }
  }

  const seasonSelectionHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    setSelectedSeason(event.target.value);
  }

  return (
    <Fragment>
      {loading && !error && <div>It&#39;s loading!</div>}
      {!loading && !error && playerInfo &&
        <PlayerContainer>
          <PlayerInfo player={playerInfo}/>
          <form className={styles["form"]}>
            <select value={statsType} onChange={statGroupingSelectionHandler}>
              <option value="career">Career</option>
              <option value="YearByYear">Year By Year</option>
              <option value="season">Season</option>
            </select>
            <select ref={selectedSeasonRef} className={styles["year-selection"]} value={selectedSeason} onChange={seasonSelectionHandler}>
              {playerSeasons}
            </select>
          </form>
          {!statsLoading && <PlayerStats player={playerData} grouping={statsType}/>}
          {statsLoading && <div>It&#39;s loading!</div>}
        </PlayerContainer>}
    </Fragment>
  );
};

export default BBPlayerPage;
