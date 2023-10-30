

import { useContext } from 'react';
import { GameContext } from '../../layout'; 

import styles from './boxtable.module.css';
import StatsTable from './boxstatstable';

const BoxTable = ({ tableType, tableOrder }) => {
    const { game, loading, error } = useContext(GameContext);
    let awayPlayerInfo = [];
    let homePlayerInfo = [];
    let homeTotals = {};
    let awayTotals = {};

    if (tableType === "Batters") {
        awayPlayerInfo = game["awayBatters"];
        awayTotals = game["awayBattingTotals"];
        homePlayerInfo = game["homeBatters"];
        homeTotals = game["homeBattingTotals"];
    } else {
        awayPlayerInfo = game["awayPitchers"];
        awayTotals = game["awayPitchingTotals"];
        homePlayerInfo = game["homePitchers"];
        homeTotals = game["homePitchingTotals"];
    }

    return (
        <div className={styles["boxstats-tables-container"]}>
            <div className={styles["boxstats-team-container"]}>
                <StatsTable stats={awayPlayerInfo} order={tableOrder} totals={awayTotals}/>
            </div>
            <div className={styles["boxstats-team-container"]}>
                <StatsTable stats={homePlayerInfo} order={tableOrder} totals={homeTotals}/>
            </div>
        </div>
    );
}

export default BoxTable;