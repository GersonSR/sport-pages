import styles from "./divisionstandings.module.css";

const DivisionStandings = ({ division }) => {
  let calculatePCT = (wins, losses) => {
    return Number(wins / (wins + losses)).toFixed(3);
  };

  return (
    <div className={styles["division"]}>
      <span>{division.div_name}</span>
      <table className="teams-table">
        <thead>
          <tr>
            <th>Teams</th>
            <th>W</th>
            <th>L</th>
            <th>PCT</th>
            <th>GB</th>
          </tr>
        </thead>
        <tbody>
          {division.teams.map((team) => (
            <tr key={team.team_id}>
              <td>{team.name}</td>
              <td>{team.w}</td>
              <td>{team.l}</td>
              <td>{calculatePCT(team.w, team.l)}</td>
              <td>{team.gb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DivisionStandings;
