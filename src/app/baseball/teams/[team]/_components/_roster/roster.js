import PositionCard from "./positioncard";
import styles from "./roster.module.css";

const Roster = (props) => {
  let infielders = [];
  let outfielders = [];
  let pitchers = [];
  let catchers = [];
  let hitters = [];

  // const roster = [
  //   {
  //     jerseyNumber: "2",
  //     parentTeamId: 117,
  //     person: {
  //       fullName: "Alex Bregman",
  //       id: 608324,
  //       link: "/api/v1/people/608324",
  //     },
  //     position: {
  //       abbreviation: "3B",
  //       code: "5",
  //       name: "Third Base",
  //       type: "Infielder",
  //     },
  //     status: {
  //       code: "A",
  //       description: "Active",
  //     },
  //   },
  // ];

  const roster = props.roster;

  for (const player of roster) {
    switch (player.position.type) {
      case "Infielder":
        infielders.push(player);
        break;
      case "Outfielder":
        outfielders.push(player);
        break;
      case "Pitcher":
        pitchers.push(player);
        break;
      case "Catcher":
        catchers.push(player);
        break;
      case "Hitter":
        hitters.push(player);
        break;
      default:
        break;
    }
  }

  console.log("Created Roster");

  return (
    <div className={styles["player-container"]}>
      <PositionCard position="Pitchers" players={pitchers} />
      <PositionCard position="Infielders" players={infielders} />
      <PositionCard position="Outfielders" players={outfielders} />
      <PositionCard position="Catchers" players={catchers} />
      <PositionCard position="Hitters" players={hitters} />
    </div>
  );
};

export default Roster;
