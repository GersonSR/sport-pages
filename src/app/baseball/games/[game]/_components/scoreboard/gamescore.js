import { GameContext } from "../../layout";
import { useContext } from "react";

import styles from "./gamescore.module.css";

const GameScore = () => {
    const { game, loading, error } = useContext(GameContext);

    // Retrieve team info
    const awayTeam = game["teams"]["away"];
    const homeTeam = game["teams"]["home"];

    // Retrieve team scores
    const awayScore = game["linescore"]["teams"]["away"]["runs"];
    const homeScore = game["linescore"]["teams"]["home"]["runs"];

    return (
        <div className={styles["game-score"]}>
            <div>
                <div>Away Team</div>
                <div>{awayScore}</div>
            </div>
            <div> at </div>
            <div>
                <div>Home Team</div>
                <div>{homeScore}</div>
            </div>
        </div>
    );
};

export default GameScore;