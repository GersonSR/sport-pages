
import styles from "./boxtablenotes.module.css";

const StatsTableNotes = ({ notes, additional }) => {
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
    if (notes.length === 0 && additional.length === 0) {
        return <div className={styles["stats-table-notes"]}>No Additional Notes.</div>;
    }

    return (
    <div className="stats-table-notes">
        <h3>Additional Notes:</h3>
        {notes.map((note, index) => {
            return (
            <div key={index}>
                {note["label"]} : {note["value"]}
            </div>
            );
        })}
        {additional.map((category, index) => {
            return(
            <div key={index}>
                <h4>{category["title"]}</h4>
                {category["fieldList"].map((note, index) => {
                    return (
                    <div key={index}>
                        {note["label"]} : {note["value"]}
                    </div>
                    );
                })}
            </div>
            );
        })}
    </div>        
    );
};

export default StatsTableNotes;
