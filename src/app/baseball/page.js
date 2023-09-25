import Link from "next/link";
import Image from "next/image";
import ScoreTable from "./_components/scoretable/scoretable";

import styles from "./page.module.css";
const SportPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>
        <span> Baseball Leagues </span>
        <Image
          src="/images/baseball.svg"
          alt="Baseball"
          width={200}
          height={100}
        />
      </h1>
      <ul className={styles.leagues}>
        <p>Choose which league to view:</p>
        <li className={styles.league} key={"MLB"}>
          <Link href="/baseball/MLB">
            <Image 
              src="/images/baseball/mlb/mlblogo.svg"
              alt="MLB Logo"
              width={128}
              height={72}
            ></Image>
            <span>MLB</span>
            </Link>
            <ScoreTable league="mlb" date="today"/>
        </li>
      </ul>
    </main>
  );
};

export default SportPage;
