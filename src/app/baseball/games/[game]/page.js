"use client"
import { useContext } from 'react';
import { GameContext } from './layout';


import Scoreboard from './_components/scoreboard/scoreboard';

import styles from './page.module.css';

const GamePage = ({ params }) => {
    const { game, loading, error } = useContext(GameContext);

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>{error}</div>
    } else if (!game) {
        return <div>Game not found!</div>
    } else {
        console.log(game);
    }

    return (
        <main className={styles["main-container"]}>
            <div style={{textAlign: "center"}}>
                <h1>Game Page</h1>
                <p>Game ID: {params.game}</p>
            </div>
            <Scoreboard />
        </main>
    );
}

export default GamePage;
