
import ScoreboardHeader from "./scoreheader";
import GameScore from "./gamescore";
import LineScore from "./linescore";

import styles from "./scoreboard.module.css";

const Scoreboard = () => {
    return (
        <div className={styles["scoreboard-container"]}>
            <ScoreboardHeader/>
            <GameScore/>
            <LineScore/>
        </div>
    );
}

export default Scoreboard;