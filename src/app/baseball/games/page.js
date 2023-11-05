"use client";

import { useEffect, useState } from "react";

import ReactDatePicker from "react-datepicker";
import ScoreTable from "../_components/scoretable/scoretable";
import Link from "next/link";
import Image from "next/image";

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
      {leagues.map((league) => {
        console.log(league);
        let leagueLogoUrl = `/images/baseball/${league.toLowerCase()}/${league.toLowerCase()}logo.svg`;
        return (
          <div className={styles["league-container"]}>
            <Link href={`/baseball/${league}`}>
              <Image
                src={leagueLogoUrl}
                alt={`${league} Logo`}
                width={128}
                height={72}
                sizes="100vw"
                // Make the image display full width
                className={styles["league-logo"]}
              ></Image>
              <span>{league}</span>
            </Link>
            <div className={styles["league-score-container"]}>
              <ScoreTable league="MLB" date="06-06-2016" verbosity="expanded" />
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GamesPage;
