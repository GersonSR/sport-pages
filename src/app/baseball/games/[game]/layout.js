"use client"

import { useEffect, useState, createContext } from 'react';


export const GameContext = createContext(null);

const GameLayout = ({ children, params }) => {
    const [game, setGame] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getGame = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/mlb/game/${params.game}`);
            if (!response.ok) {
                throw new Error("Game could not be retrieved!");
            }
            else {
                const data = await response.json();
                setGame(data);
            }
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getGame();
    }, []);


    return (
        <GameContext.Provider value={{ game, loading, error }}>
            { children }
        </GameContext.Provider>
    );
};

export default GameLayout;