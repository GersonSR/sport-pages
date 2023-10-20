"use client" //Will be using state for this component

import styles from "./teamroster.module.css";
import Roster from "./_roster/roster";

import { useEffect, useState } from "react";
import Coaches from "./_roster/coaches";

const TeamRoster = ({ team, type }) => {
  const [roster, setRoster] = useState([]);
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); //Change to false once done with roster work
  let formattedDate = date.toLocaleDateString("en-CA")
  let todayMax = new Date().toLocaleDateString("en-CA");

  const getRoster = async () => {
    setIsLoaded(false);
    try {
      let apiDate = date.toLocaleDateString("en-US").replaceAll("/", "-");
      // console.log(type);
      let response;
      if (type === "players") {
        response = await fetch(`/api/mlb/team/${team.id}/roster/${apiDate}`);
      } else if (type === "coaches") {
        response = await fetch(`/api/mlb/team/${team.id}/coaches/${apiDate}`);
      }
      if (!response.ok) {
        throw new Error("Roster could not get retrieved!");
      }
      else {
        const data = await response.json();
        // console.log(data);
        setRoster(data.roster);
      }
    } catch (error) {
      console.log(error.message);
    }
    setIsLoaded(true);
  }

  const handleDateChange = (event) => {
    let dateType = new Date(event.target.value);
    formattedDate = dateType.toLocaleDateString("en-CA");
    setDate(dateType);
  }

  const rosterUpdateHandler = (event) => {
    event.preventDefault();
    getRoster();
  }

  // useEffect(() => {
  //   formattedDate = date.toLocaleDateString("en-CA")  ;
  // }, [date]);

  useEffect(() => {
    getRoster(); 
  }, []);


  return (
    <div className={styles["roster-container"]}>
      <div className={styles["roster-header"]}>
        {((type === "players") ? <h2>Team Roster</h2> : <h2>Team Personnel</h2>)}
        <form className={styles["roster-filter"]} onSubmit={rosterUpdateHandler}>
          <label htmlFor="roster-date">
            Date: <input type="date" name="roster-date" max={todayMax} value={formattedDate} onChange={handleDateChange}/>
          </label>
          <button>Search</button>
        </form>
      </div>
      {!isLoaded && <div>Loading...</div>}
      {isLoaded && (roster.length > 0) && 
        ((type === "players") ? <Roster roster={roster}/> : <Coaches coaches={roster}/>)
      }
    </div>
  );
}

export default TeamRoster