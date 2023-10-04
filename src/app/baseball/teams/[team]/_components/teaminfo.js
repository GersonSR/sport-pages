
import styles from "./teaminfo.module.css"

import Link from "next/link";

const TeamInfo = ({ team }) => {
  console.log(team);
  const teamCode = team["teamCode"].toUpperCase();
  return (
    <div className={styles["info-container"]}>
      <div className={styles["team-name"]}>{team.name}<span className={styles["team-code"]}>{" ("}{teamCode}{")"}</span></div>
      <Link href="baseball/mlb" className={styles.link}>MLB Team Page</Link>
    </div>
  );
}

export default TeamInfo;
