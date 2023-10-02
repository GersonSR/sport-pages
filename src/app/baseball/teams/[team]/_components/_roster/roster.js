import styles from "./roster.module.css";

const Roster = (props) => {
  const roster = [{
    "jerseyNumber": "2",
    "parentTeamId": 117,
    "person": {
        "fullName": "Alex Bregman",
        "id": 608324,
        "link": "/api/v1/people/608324"
    },
    "position": {
        "abbreviation": "3B",
        "code": "5",
        "name": "Third Base",
        "type": "Infielder"
    },
    "status": {
        "code": "A",
        "description": "Active"
    }
}]

  return (
    <div className={styles["player-container"]}>
      Players here!
    </div>
  );
}

export default Roster;