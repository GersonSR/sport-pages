import { GameContext } from "../../layout";
import { useContext } from "react";

import styles from "./gamescore.module.css";

const GameScore = () => {
    const { game, loading, error } = useContext(GameContext);



    return (
        <div className={styles["game-score"]}>
            <div>
                <div>Away Team</div>
                <div>0</div>
            </div>
            <div>-</div>
            <div>
                <div>Home Team</div>
                <div>0</div>
            </div>
        </div>
    );
};

export default GameScore;