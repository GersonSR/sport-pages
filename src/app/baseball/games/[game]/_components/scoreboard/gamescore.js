import { GameContext } from "../../layout";
import { useContext } from "react";

import styles from "./gamescore.module.css";
import Link from "next/link";

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
            <div className={styles["team-info"]}> 
                <div><Link className={styles["team-link"]} href={`/baseball/teams/${awayTeam["id"]}`}>{awayTeam["name"]}</Link></div>
                <div className={styles["team-record"]}>({awayTeam["record"]["wins"]} - {awayTeam["record"]["losses"]})</div>
            </div>
            <div className={styles["score"]}>{awayScore}</div>
            <div className={styles["score-container"]}>at</div>
            <div className={styles["score"]}>{homeScore}</div>
            <div className={styles["team-info"]}>
                <div><Link className={styles["team-link"]} href={`/baseball/teams/${homeTeam["id"]}`}>{homeTeam["name"]}</Link></div>
                <div className={styles["team-record"]}>({homeTeam["record"]["wins"]} - {homeTeam["record"]["losses"]})</div>
            </div>
        </div>
    );
};

export default GameScore;