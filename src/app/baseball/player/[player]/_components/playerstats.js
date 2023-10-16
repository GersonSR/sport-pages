import styles from "./playerstats.module.css";
import StatsTable from "./statstable";
const PlayerStats = ({ player }) => {
  const playerStatsObjects = player.people[0].stats;
  const playerPosition = player.people[0].primaryPosition.abbreviation;

  let content = <div>Player Stats Here!</div>;
  if (playerPosition === "P") {
    content = 
      <div className={styles["player-stats-container"]}>
        <div> Career Stats </div>
        <StatsTable stats={playerStatsObjects} type="pitching" grouping="career"/>
        <StatsTable stats={playerStatsObjects} type="fielding" grouping="career"/>
        <StatsTable stats={playerStatsObjects} type="hitting" grouping="career"/>
      </div>
  } else {
    content = 
      <div className={styles["player-stats-container"]}>
        <div> Career Stats </div>
        <StatsTable stats={playerStatsObjects} type="hitting" grouping="career"/>
        <StatsTable stats={playerStatsObjects} type="fielding" grouping="career"/>
        <StatsTable stats={playerStatsObjects} type="pitching" grouping="career"/>
      </div>  }

  return (
    <div className={styles["player-info-container"]}>{content}</div>
  );
};

export default PlayerStats;