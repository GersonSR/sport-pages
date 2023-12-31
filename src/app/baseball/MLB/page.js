"use client"; // Still figuring out, will learn later.

import { createContext, useCallback, useEffect, useState } from "react";
import LeagueStandings from "./_components/leaguestandings";
import { MLBContext } from "./_context/mlbcontext";

import styles from "./page.module.css";

const MLBPage = () => {
  const [standings, setStandings] = useState(undefined);

  // Testing JSON
  // useEffect(() => {
  //   setStandings({
  //     200: {
  //       div_name: "American League West",
  //       teams: [
  //         {
  //           div_rank: "1",
  //           elim_num: "-",
  //           gb: "-",
  //           l: 68,
  //           league_rank: "3",
  //           name: "Texas Rangers",
  //           sport_rank: "6",
  //           team_id: 140,
  //           w: 88,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "-",
  //         },
  //         {
  //           div_rank: "2",
  //           elim_num: "4",
  //           gb: "2.5",
  //           l: 71,
  //           league_rank: "5",
  //           name: "Houston Astros",
  //           sport_rank: "9",
  //           team_id: 117,
  //           w: 86,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "3",
  //         },
  //         {
  //           div_rank: "3",
  //           elim_num: "3",
  //           gb: "4.0",
  //           l: 72,
  //           league_rank: "6",
  //           name: "Seattle Mariners",
  //           sport_rank: "10",
  //           team_id: 136,
  //           w: 84,
  //           wc_elim_num: "5",
  //           wc_gb: "1.5",
  //           wc_rank: "4",
  //         },
  //         {
  //           div_rank: "4",
  //           elim_num: "E",
  //           gb: "18.5",
  //           l: 87,
  //           league_rank: "12",
  //           name: "Los Angeles Angels",
  //           sport_rank: "24",
  //           team_id: 108,
  //           w: 70,
  //           wc_elim_num: "E",
  //           wc_gb: "16.0",
  //           wc_rank: "9",
  //         },
  //         {
  //           div_rank: "5",
  //           elim_num: "E",
  //           gb: "40.0",
  //           l: 108,
  //           league_rank: "15",
  //           name: "Oakland Athletics",
  //           sport_rank: "30",
  //           team_id: 133,
  //           w: 48,
  //           wc_elim_num: "E",
  //           wc_gb: "37.5",
  //           wc_rank: "12",
  //         },
  //       ],
  //     },
  //     201: {
  //       div_name: "American League East",
  //       teams: [
  //         {
  //           div_rank: "1",
  //           elim_num: "-",
  //           gb: "-",
  //           l: 59,
  //           league_rank: "1",
  //           name: "Baltimore Orioles",
  //           sport_rank: "2",
  //           team_id: 110,
  //           w: 98,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "-",
  //         },
  //         {
  //           div_rank: "2",
  //           elim_num: "3",
  //           gb: "3.0",
  //           l: 62,
  //           league_rank: "2",
  //           name: "Tampa Bay Rays",
  //           sport_rank: "4",
  //           team_id: 139,
  //           w: 95,
  //           wc_elim_num: "-",
  //           wc_gb: "+9.0",
  //           wc_rank: "1",
  //         },
  //         {
  //           div_rank: "3",
  //           elim_num: "E",
  //           gb: "11.0",
  //           l: 70,
  //           league_rank: "4",
  //           name: "Toronto Blue Jays",
  //           sport_rank: "8",
  //           team_id: 141,
  //           w: 87,
  //           wc_elim_num: "-",
  //           wc_gb: "+1.0",
  //           wc_rank: "2",
  //         },
  //         {
  //           div_rank: "4",
  //           elim_num: "E",
  //           gb: "18.0",
  //           l: 77,
  //           league_rank: "8",
  //           name: "New York Yankees",
  //           sport_rank: "16",
  //           team_id: 147,
  //           w: 80,
  //           wc_elim_num: "E",
  //           wc_gb: "6.0",
  //           wc_rank: "5",
  //         },
  //         {
  //           div_rank: "5",
  //           elim_num: "E",
  //           gb: "21.5",
  //           l: 80,
  //           league_rank: "9",
  //           name: "Boston Red Sox",
  //           sport_rank: "19",
  //           team_id: 111,
  //           w: 76,
  //           wc_elim_num: "E",
  //           wc_gb: "9.5",
  //           wc_rank: "6",
  //         },
  //       ],
  //     },
  //     202: {
  //       div_name: "American League Central",
  //       teams: [
  //         {
  //           div_rank: "1",
  //           elim_num: "-",
  //           gb: "-",
  //           l: 73,
  //           league_rank: "7",
  //           name: "Minnesota Twins",
  //           sport_rank: "11",
  //           team_id: 142,
  //           w: 83,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "-",
  //         },
  //         {
  //           div_rank: "2",
  //           elim_num: "E",
  //           gb: "9.5",
  //           l: 83,
  //           league_rank: "10",
  //           name: "Detroit Tigers",
  //           sport_rank: "20",
  //           team_id: 116,
  //           w: 74,
  //           wc_elim_num: "E",
  //           wc_gb: "12.0",
  //           wc_rank: "7",
  //         },
  //         {
  //           div_rank: "3",
  //           elim_num: "E",
  //           gb: "10.0",
  //           l: 84,
  //           league_rank: "11",
  //           name: "Cleveland Guardians",
  //           sport_rank: "22",
  //           team_id: 114,
  //           w: 74,
  //           wc_elim_num: "E",
  //           wc_gb: "12.5",
  //           wc_rank: "8",
  //         },
  //         {
  //           div_rank: "4",
  //           elim_num: "E",
  //           gb: "23.0",
  //           l: 96,
  //           league_rank: "13",
  //           name: "Chicago White Sox",
  //           sport_rank: "27",
  //           team_id: 145,
  //           w: 60,
  //           wc_elim_num: "E",
  //           wc_gb: "25.5",
  //           wc_rank: "10",
  //         },
  //         {
  //           div_rank: "5",
  //           elim_num: "E",
  //           gb: "29.5",
  //           l: 103,
  //           league_rank: "14",
  //           name: "Kansas City Royals",
  //           sport_rank: "29",
  //           team_id: 118,
  //           w: 54,
  //           wc_elim_num: "E",
  //           wc_gb: "32.0",
  //           wc_rank: "11",
  //         },
  //       ],
  //     },
  //     203: {
  //       div_name: "National League West",
  //       teams: [
  //         {
  //           div_rank: "1",
  //           elim_num: "-",
  //           gb: "-",
  //           l: 60,
  //           league_rank: "2",
  //           name: "Los Angeles Dodgers",
  //           sport_rank: "3",
  //           team_id: 119,
  //           w: 96,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "-",
  //         },
  //         {
  //           div_rank: "2",
  //           elim_num: "E",
  //           gb: "14.0",
  //           l: 74,
  //           league_rank: "5",
  //           name: "Arizona Diamondbacks",
  //           sport_rank: "12",
  //           team_id: 109,
  //           w: 82,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "2",
  //         },
  //         {
  //           div_rank: "3",
  //           elim_num: "E",
  //           gb: "18.5",
  //           l: 79,
  //           league_rank: "9",
  //           name: "San Francisco Giants",
  //           sport_rank: "17",
  //           team_id: 137,
  //           w: 78,
  //           wc_elim_num: "2",
  //           wc_gb: "4.5",
  //           wc_rank: "6",
  //         },
  //         {
  //           div_rank: "4",
  //           elim_num: "E",
  //           gb: "19.5",
  //           l: 80,
  //           league_rank: "10",
  //           name: "San Diego Padres",
  //           sport_rank: "18",
  //           team_id: 135,
  //           w: 77,
  //           wc_elim_num: "1",
  //           wc_gb: "5.5",
  //           wc_rank: "7",
  //         },
  //         {
  //           div_rank: "5",
  //           elim_num: "E",
  //           gb: "39.0",
  //           l: 99,
  //           league_rank: "15",
  //           name: "Colorado Rockies",
  //           sport_rank: "28",
  //           team_id: 115,
  //           w: 57,
  //           wc_elim_num: "E",
  //           wc_gb: "25.0",
  //           wc_rank: "12",
  //         },
  //       ],
  //     },
  //     204: {
  //       div_name: "National League East",
  //       teams: [
  //         {
  //           div_rank: "1",
  //           elim_num: "-",
  //           gb: "-",
  //           l: 56,
  //           league_rank: "1",
  //           name: "Atlanta Braves",
  //           sport_rank: "1",
  //           team_id: 144,
  //           w: 100,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "-",
  //         },
  //         {
  //           div_rank: "2",
  //           elim_num: "E",
  //           gb: "12.5",
  //           l: 69,
  //           league_rank: "4",
  //           name: "Philadelphia Phillies",
  //           sport_rank: "7",
  //           team_id: 143,
  //           w: 88,
  //           wc_elim_num: "-",
  //           wc_gb: "+5.5",
  //           wc_rank: "1",
  //         },
  //         {
  //           div_rank: "3",
  //           elim_num: "E",
  //           gb: "19.0",
  //           l: 75,
  //           league_rank: "7",
  //           name: "Miami Marlins",
  //           sport_rank: "14",
  //           team_id: 146,
  //           w: 81,
  //           wc_elim_num: "6",
  //           wc_gb: "1.0",
  //           wc_rank: "4",
  //         },
  //         {
  //           div_rank: "4",
  //           elim_num: "E",
  //           gb: "29.0",
  //           l: 85,
  //           league_rank: "12",
  //           name: "New York Mets",
  //           sport_rank: "23",
  //           team_id: 121,
  //           w: 71,
  //           wc_elim_num: "E",
  //           wc_gb: "11.0",
  //           wc_rank: "9",
  //         },
  //         {
  //           div_rank: "5",
  //           elim_num: "E",
  //           gb: "32.0",
  //           l: 89,
  //           league_rank: "13",
  //           name: "Washington Nationals",
  //           sport_rank: "25",
  //           team_id: 120,
  //           w: 69,
  //           wc_elim_num: "E",
  //           wc_gb: "14.0",
  //           wc_rank: "10",
  //         },
  //       ],
  //     },
  //     205: {
  //       div_name: "National League Central",
  //       teams: [
  //         {
  //           div_rank: "1",
  //           elim_num: "-",
  //           gb: "-",
  //           l: 68,
  //           league_rank: "3",
  //           name: "Milwaukee Brewers",
  //           sport_rank: "5",
  //           team_id: 158,
  //           w: 88,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "-",
  //         },
  //         {
  //           div_rank: "2",
  //           elim_num: "1",
  //           gb: "6.0",
  //           l: 74,
  //           league_rank: "6",
  //           name: "Chicago Cubs",
  //           sport_rank: "13",
  //           team_id: 112,
  //           w: 82,
  //           wc_elim_num: "-",
  //           wc_gb: "-",
  //           wc_rank: "3",
  //         },
  //         {
  //           div_rank: "3",
  //           elim_num: "E",
  //           gb: "8.0",
  //           l: 77,
  //           league_rank: "8",
  //           name: "Cincinnati Reds",
  //           sport_rank: "15",
  //           team_id: 113,
  //           w: 81,
  //           wc_elim_num: "4",
  //           wc_gb: "2.0",
  //           wc_rank: "5",
  //         },
  //         {
  //           div_rank: "4",
  //           elim_num: "E",
  //           gb: "14.5",
  //           l: 83,
  //           league_rank: "11",
  //           name: "Pittsburgh Pirates",
  //           sport_rank: "21",
  //           team_id: 134,
  //           w: 74,
  //           wc_elim_num: "E",
  //           wc_gb: "8.5",
  //           wc_rank: "8",
  //         },
  //         {
  //           div_rank: "5",
  //           elim_num: "E",
  //           gb: "20.0",
  //           l: 88,
  //           league_rank: "14",
  //           name: "St. Louis Cardinals",
  //           sport_rank: "26",
  //           team_id: 138,
  //           w: 68,
  //           wc_elim_num: "E",
  //           wc_gb: "14.0",
  //           wc_rank: "11",
  //         },
  //       ],
  //     },
  //   });
  // }, []);

  const fetchStandings = useCallback(async () => {
    try {
      const response = await fetch("/api/mlb/standings/today");
      if (!response.ok) {
        throw new Error("Standings could not get retrieved!");
      } else {
        const data = await response.json();
        console.log(data);
        setStandings(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []); //update to custom hook later

  useEffect(() => {
    fetchStandings();
  }, []);

  return (
    <MLBContext.Provider
      value={{
        standings: standings,
      }}
    >
      <main className={styles.main}>
        <h1 className={styles.header}>MLB Home Page</h1>
        <div className={styles["league-intro"]}>
          Hello, this is the MLB page.
        </div>
        <LeagueStandings standings={standings}></LeagueStandings>
      </main>
    </MLBContext.Provider>
  );
};

export default MLBPage;
