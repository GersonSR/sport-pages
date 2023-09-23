//Currently will be hardcoded for baseball/MLB. Will need to be updated to be dynamic for all sports/leagues.

const ScoreItem = (props) => {
  const score = props.score;

  return (
    <div className="score-item">
      {score["away_name"] + "@" + score["home_name"]}    
    </div>
  );
};

export default ScoreItem;