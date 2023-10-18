import styles from "./playerstats.module.css";
import StatsTable from "./statstable";
const PlayerStats = ({ player, grouping }) => {
  const playerStatsObjects = player.people[0].stats;
  const playerPosition = player.people[0].primaryPosition.abbreviation;

  let content = <div>Player Stats Here!</div>;
  if (playerPosition === "P") {
    content = 
      <div className={styles["player-stats-container"]}>
        <h3 className={styles["category"]}></h3>
        <StatsTable stats={playerStatsObjects} type="pitching" grouping={grouping}/>
        <StatsTable stats={playerStatsObjects} type="fielding" grouping={grouping}/>
        <StatsTable stats={playerStatsObjects} type="hitting" grouping={grouping}/>
      </div>
  } else {
    content = 
      <div className={styles["player-stats-container"]}>
        <h3 className={styles["category"]}></h3>
        <StatsTable stats={playerStatsObjects} type="hitting" grouping={grouping}/>
        <StatsTable stats={playerStatsObjects} type="fielding" grouping={grouping}/>
        <StatsTable stats={playerStatsObjects} type="pitching" grouping={grouping}/>
      </div>  }

  return (
    <div className={styles["player-info-container"]}>{content}</div>
  );
};

export default PlayerStats;