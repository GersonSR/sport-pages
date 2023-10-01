import Link from "next/link";
import styles from "./divisionstandings.module.css";

const DivisionStandings = ({ division }) => {
  let calculatePCT = (wins, losses) => {
    return Number(wins / (wins + losses)).toFixed(3);
  };

  return (
    <div className={styles["division"]}>
      <table className={styles["teams-table"]}>
        <caption>{division.div_name}</caption>
        <colgroup>
          <col/>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>
        <thead>
          <tr className={styles["teams-table-head"]}>
            <th>Teams</th>
            <th>W</th>
            <th>L</th>
            <th>WIN%</th>
            <th>GB</th>
          </tr>
        </thead>
        <tbody>
          {division.teams.map((team) => (
            <tr className={styles["team-row"]} key={team.team_id}>
              <td className={styles["team-names"]}><Link className={styles["team-link"]} href={"/baseball/teams/" + `${team.team_id}`}>{team.name}</Link></td>
              <td className={styles["wins"]}>{team.w}</td>
              <td className={styles["losses"]}>{team.l}</td>
              <td className={styles["win-pct"]}>{calculatePCT(team.w, team.l)}</td>
              <td className={styles["games-back"]}>{team.gb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DivisionStandings;
