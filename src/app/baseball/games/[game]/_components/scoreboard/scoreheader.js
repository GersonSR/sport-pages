
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


    return (
        <div className="scoreboard-header">
            <div>
                <div>{formattedDate}, {formattedTime}<span className={styles["side-note"]}>{timeZone.replace("_", " ")} time zone format.</span></div>
            </div>
            Date, Time, Location, Weather(?), and status.
        </div>
    );
};

export default ScoreboardHeader;