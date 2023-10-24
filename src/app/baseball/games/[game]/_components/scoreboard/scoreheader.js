
import { useContext } from "react";
import { GameContext } from "../../layout";

import styles from "./scoreheader.module.css";

const ScoreboardHeader = () => {
    const {game, loading , error} = useContext(GameContext);

    // Retrieve the timezone of the user and use it to create formatted date and time strings, this can be reverted and just use the date and time provided by MLB
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const gameTime = new Date(game["datetime"]["dateTime"]);
    const formattedDate = gameTime.toLocaleString(navigator.language, {timeZone: timeZone, year: 'numeric', month: 'long', day: 'numeric'});
    const formattedTime = gameTime.toLocaleTimeString(navigator.language, {timeZone: timeZone, hour: '2-digit', minute: '2-digit'});

    // Venue and Weather Information
    const weatherDescription = game["gameBoxInfo"]["Weather"];
    const venue = game["gameBoxInfo"]["Venue"];
    const formattedWeather = weatherDescription.replace(" degrees", "°F").split(",")[0];

    // Game Status
    let statusContent;
    let status = game["status"]["abstractGameState"];
    if (status === "Live") {
        status = game["status"]["detailedState"];
        statusContent = (
            <div>
                <div>{status}</div>
                <div>{game["linescore"]["inningState"]} {game["linescore"]["currentInningOrdinal"]}</div>
            </div>
        );
    } else {
        statusContent = (
            <div>
                <div>{status}</div>
            </div>
        );
    }
    return (
        <div className={styles["scoreboard-header"]}>
            <div className={styles["game-info"]}>
                <div>{formattedDate}, {formattedTime}<span className={styles["side-note"]}>{timeZone.replace("_", " ")} time zone format.</span></div>
                <div>{venue}</div>
                <div>{formattedWeather}</div>
            </div>
            <div className={styles["game-status"]}>
                <div>{statusContent}</div>
            </div>
        </div>
    );
};

export default ScoreboardHeader;