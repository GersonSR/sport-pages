import { Fragment } from "react";
import styles from "./positiontable.module.css";

const PositionTable = ({ players }) => {
  let nonEmptyPlayers = true;
  if (players.length === 0) {
    nonEmptyPlayers = false;
  }

  return (
    <Fragment>
      {!nonEmptyPlayers && <div>No Players Found</div>}
      {nonEmptyPlayers && <table>
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
              <td>{player.person.fullName}</td>
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
