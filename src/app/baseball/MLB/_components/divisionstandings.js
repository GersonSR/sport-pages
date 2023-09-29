import styles from "./divisionstandings.module.css";

const DivisionStandings = ({division}) => {
  console.log(division);
  return(
    <div className={styles["division"]}>
      {division.div_name}
    </div>
  );
}

export default DivisionStandings;