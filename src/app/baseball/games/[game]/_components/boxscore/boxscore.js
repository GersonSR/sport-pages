import styles from './boxscore.module.css';
import BoxTable from './boxtable';

const BoxScore = () => {

    const battersTableFields = ["namefield", "ab", "r", "h", "rbi", "bb", "k", "lob", "avg", "ops"];


    return (
        <div className={styles["boxscore-container"]}>
            <h2>Box Score</h2>
            <BoxTable tableType={"Batters"} tableOrder={battersTableFields}/>
        </div>
    );
};

export default BoxScore;