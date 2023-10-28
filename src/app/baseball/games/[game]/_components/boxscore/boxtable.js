

import { useContext } from 'react';
import { GameContext } from '../../layout'; 

import styles from './boxtable.module.css';
import StatsTable from './boxstatstable';

const BoxTable = ({ tableType, tableOrder }) => {
    const { game, loading, error } = useContext(GameContext);
    let awayPlayerInfo = [];
    let homePlayerInfo = [];

    if (tableType === "Batters") {
        awayPlayerInfo = game["awayBatters"];
        homePlayerInfo = game["homeBatters"];
    } else {
        awayPlayerInfo = game["awayPitchers"];
        awayPlayerInfo = game["homePitchers"];
    }

    return (
        <div className={styles["boxstats-tables-container"]}>
            <div className={styles["boxstats-team-container"]}><StatsTable stats={awayPlayerInfo} order={tableOrder} /></div>
            <div className={styles["boxstats-team-container"]}><StatsTable stats={homePlayerInfo} order={tableOrder} /></div>
        </div>
    );
}

export default BoxTable;