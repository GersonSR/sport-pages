import { GameContext } from "../../layout";
import { useContext } from "react";

import styles from "./linescore.module.css"

const LineScore = () => {
    const { game, loading, error } = useContext(GameContext);

    return (
        <div className="linescore">
            1st Inning, 2nd Inning, etc etc. 1st | 2nd |  R | H | E
        </div>
    );
};

export default LineScore;