import PositionCard from "./positioncard";
import styles from "./coaches.module.css";
import { Fragment } from "react";
const Coaches = ({ coaches }) => {
  // Too cluttered, need to refactor
  // let coachesObject = {};

  // for (const coach of coaches) {
  //   console.log(coach);
  //   let jerseyNumber = coach.jerseyNumber;
  //   let fullName = coach.person.fullName;
  //   let abbreviation = coach.title;
  //   let id = coach.person.id;
  //   let position = coach.job;
  //   if (position in coachesObject) {
  //     coachesObject[position].push({"person" : {fullName : fullName, id : id}, "jerseyNumber": jerseyNumber, "position" : {abbreviation : abbreviation}});
  //   } else {
  //     coachesObject[position] = [{"person" : {fullName : fullName, id : id}, "jerseyNumber": jerseyNumber, "position" : {abbreviation : abbreviation}}];
  //   }
  // }

  // let coachPositions = Object.keys(coachesObject);
  // return (
  //   // <PositionTable position="Coaches" players={coaches}/>
  //   <div className={styles["coaches-container"]}>
  //     {coachPositions.map((position) => {
  //       return <PositionCard position={position} players={coachesObject[position]} key={position} className={styles["coach-card"]}/>
  //     })}
  //   </div>
  // )

  let coachesArray = [];
  for (const coach of coaches) {
    let jerseyNumber = coach.jerseyNumber;
    let fullName = coach.person.fullName;
    let abbreviation = coach.title;
    let id = coach.person.id;
    coachesArray.push({
      person: { fullName: fullName, id: id },
      jerseyNumber: jerseyNumber,
      position: { abbreviation: abbreviation },
    });
  }

  // console.log(coachesArray);
  return (
    <div className={styles["coaches-container"]}>
      <PositionCard
        position= "Coaching Staff"
        players={coachesArray}
        className={styles["coach-card"]}
      />
    </div>
  );
};

export default Coaches;
