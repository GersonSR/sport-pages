// This page will be hard coded for now to only handle MLB score results from the MLB API.
"use client"; // haven't completely figured out best way to use client vs server components in nextjs just yet, probably just need a different component.

import { useCallback, useEffect, useState } from "react";

const ScoreTable = (props) => {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);

  const fetchScores = useCallback(async () => {
    try {
      const response = await fetch(
        "/api/mlb/schedule/today"
      );

      if (!response.ok) {
        throw new Error("Scores could not get retrieved!");
      }
      const data = await response.json();
      setScores(data);
    } catch (error) {
      setError(error.message);
    }}, []);


  useEffect(() => {
    fetchScores();
  }, [fetchScores]);


  console.log(scores);
  return (
    <div className="scoretable">
    </div>
  );
};

export default ScoreTable;