"use client";

import { useEffect, useState } from "react";

import ReactDatePicker from "react-datepicker";
import ScoreTable from "../_components/scoretable/scoretable";

import styles from "./page.module.css";
import "react-datepicker/dist/react-datepicker.css";

const GamesPage = () => {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [startDate, setStartDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("Today");
  const maxDate = new Date();

  const leagues = ["MLB"];

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  useEffect(() => {
    let formattedDate = startDate.toLocaleDateString(navigator.language, {
      timeZone: timeZone,
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormattedDate(formattedDate);
  }, [startDate]);

  return (
    <main className={styles["games-main-container"]}>
      <h3>Baseball Games for {formattedDate}</h3>
      <ReactDatePicker
        selected={startDate}
        onChange={handleDateChange}
        maxDate={maxDate}
      />
      <div className={styles["league-score-container"]}>
        <ScoreTable league="MLB" date="06-06-2016" verbosity="expanded" />
      </div>
    </main>
  );
};

export default GamesPage;
