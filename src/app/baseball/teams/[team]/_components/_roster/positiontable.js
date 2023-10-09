import { Fragment } from "react";
import styles from "./positiontable.module.css";
import Link from "next/link";

const PositionTable = ({ players }) => {
  let nonEmptyPlayers = true;
  if (players.length === 0) {
    nonEmptyPlayers = false;
  }
  return (
    <Fragment>
      {!nonEmptyPlayers && <div>No Players Found</div>}
      {nonEmptyPlayers && <table className={styles["player-table"]}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.person.id}>
              <td><Link href={`/baseball/player/${player.person.id}`} className={styles["person-link"]}>{player.person.fullName}</Link></td>
              <td>{player.jerseyNumber}</td>
              <td>{player.position.abbreviation}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </Fragment>
  );
};

export default PositionTable;
