

import { Fragment, useContext } from 'react';
import { GameContext } from '../../layout';

import styles from './boxtable.module.css';
import StatsTable from './boxstatstable';
import StatsTableNotes from './boxtablenotes';

const BoxTable = ({ tableType, tableOrder }) => {
    const { game, loading, error } = useContext(GameContext);
    let awayPlayerInfo = [];
    let homePlayerInfo = [];

    let homeTotals = {};
    let awayTotals = {};

    let homeNotes = [];
    let awayNotes = [];

    if (tableType === "Batters") {
        awayPlayerInfo = game["awayBatters"];
        awayTotals = game["awayBattingTotals"];
        // awayNotes = game["awayBattingNotes"]; Current away/homeBattingNotes data object are incorrect, manually retrieve.
        awayNotes = game["away"]["note"];

        homePlayerInfo = game["homeBatters"];
        homeTotals = game["homeBattingTotals"];
        // homeNotes = game["homeBattingNotes"];
        homeNotes = game["home"]["note"];
    } else {
        awayPlayerInfo = game["awayPitchers"];
        awayTotals = game["awayPitchingTotals"];
        // awayNotes = game["awayPitchingNotes"];

        homePlayerInfo = game["homePitchers"];
        homeTotals = game["homePitchingTotals"];
        // homeNotes = game["homePitchingNotes"];
    }

    return (
        <div className={styles["box-stats-container"]}>
            <div className={styles["boxstats-tables-container"]}>
                <div className={styles["boxstats-team-container"]}>
                    <StatsTable stats={awayPlayerInfo} order={tableOrder} totals={awayTotals} />
                </div>
                <div className={styles["boxstats-team-container"]}>
                    <StatsTable stats={homePlayerInfo} order={tableOrder} totals={homeTotals} />
                </div>
            </div>
            <div className={styles["boxstats-tables-container"]}>
                <div className={styles["boxstats-team-container"]}>
                    <StatsTableNotes notes={awayNotes} />
                </div>
                <div className={styles["boxstats-team-container"]}>
                    <StatsTableNotes notes={homeNotes} />
                </div>
            </div>
        </div>
    );
}

export default BoxTable;