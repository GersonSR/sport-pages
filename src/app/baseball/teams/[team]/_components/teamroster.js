"use client" //Will be using state for this component

import styles from "./teamroster.module.css";

import { useEffect, useState } from "react";

const TeamRoster = ({ team }) => {
  const [roster, setRoster] = useState([]);
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let formattedDate = date.toLocaleDateString("en-CA")

  const getRoster = async () => {
    try {
      let apiDate = date.toLocaleDateString("en-US").replaceAll("/", "-");
      const response = await fetch(`/api/mlb/team/${team.id}/roster/${apiDate}`);
      if (!response.ok) {
        throw new Error("Roster could not get retrieved!");
      }
      else {
        const data = await response.json();
        console.log(data);
        setRoster(data.roster);
      }
    } catch (error) {
      console.log(error.message);
    }
    setIsLoaded(true);
  }

  const handleDateChange = (event) => {
    let dateType = new Date(event.target.value);
    setDate(dateType);
  }

  const rosterUpdateHandler = (event) => {
    event.preventDefault();
    getRoster();
  }

  useEffect(() => {
    formattedDate = date.toLocaleDateString("en-CA")  ;
  }, [date]);

  useEffect(() => {
    // getRoster();
  }, []);


  return (
    <div className={styles["roster-container"]}>
      <div className={styles["roster-header"]}>
        <h2>Team Roster</h2>
        <form className={styles["roster-filter"]} onSubmit={rosterUpdateHandler}>
          <label htmlFor="roster-date">
            Date: <input type="date" id="roster-date" name="roster-date" max={formattedDate} value={formattedDate} onChange={handleDateChange}/>
          </label>
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default TeamRoster