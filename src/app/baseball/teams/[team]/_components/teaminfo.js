
import styles from "./teaminfo.module.css"

const TeamInfo = ({ team }) => {
  console.log(team);
  const teamCode = team["teamCode"].toUpperCase();
  return (
    <div className={styles["info-container"]}>
      <div className={styles["team-name"]}>{team.name}<span className={styles["team-code"]}>{" ("}{teamCode}{")"}</span></div>
      <div>Team Page</div>
    </div>
  );
}

export default TeamInfo;
