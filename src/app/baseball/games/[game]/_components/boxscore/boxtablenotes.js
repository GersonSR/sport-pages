
import styles from "./boxtablenotes.module.css";

const StatsTableNotes = ({ notes }) => {
  const noteKeys = Object.keys(notes);

  if (noteKeys.length === 0) {
    return <div className={styles["stats-table-notes"]}>No Additional Notes.</div>;
  }

  return ( 
    <div className="stats-table-notes">
        {noteKeys.map((key) => {
            return (
            <div key={key}>
                {notes[key]}
            </div>
            );
        })}
    </div>
    );
};

export default StatsTableNotes;
