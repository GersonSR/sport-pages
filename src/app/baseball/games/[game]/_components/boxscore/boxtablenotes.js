
import styles from "./boxtablenotes.module.css";

const StatsTableNotes = ({ notes }) => {
//   const noteKeys = Object.keys(notes);

//   if (noteKeys.length === 0) {
//     return <div className={styles["stats-table-notes"]}>No Additional Notes.</div>;
//   }

//   return ( 
//     <div className="stats-table-notes">
//         {noteKeys.map((key) => {
//             return (
//             <div key={key}>
//                 {notes[key]}
//             </div>
//             );
//         })}
//     </div>
//     );
    if (notes.length === 0) {
        return <div className={styles["stats-table-notes"]}>No Additional Notes.</div>;
    }

    return (
    <div className="stats-table-notes">
        {notes.map((note, index) => {
            return (
            <div key={index}>
                {note["label"]} : {note["value"]}
            </div>
            );
        })}
    </div>        
    );
};

export default StatsTableNotes;
