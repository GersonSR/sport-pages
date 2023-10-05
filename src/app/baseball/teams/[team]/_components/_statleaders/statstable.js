import styles from "./statstable.module.css";

const StatsTable = ( {players, team} ) => {
  return (
    <table className={styles["stats-table"]}>
      <thead>
        <tr>
          <th>Player</th>
          <th>Stat</th>
        </tr>
      </thead>
      <tbody> 
        {players.map((player) => {
          let playerRank = player[0];
          let playerName = player[1];
          let playerStat = player[2];
          return (
            <tr key={playerRank}>
              <td>{playerName}</td>
              <td>{playerStat}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StatsTable