import { Fragment } from "react";

const StatsTable = (props) => {
  const category = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  const groupingType = props.grouping;

  let statArray = [];
  const statObjects = [];

  const careerFunction = () => {
    for (let i = 0; i < props.stats.length; i++) {
      if (props.stats[i].group.displayName === props.type) {
        statArray = props.stats[i].splits;
      }
    }
    if (statArray.length === 0) {
      return;
    }
    if (statArray.length === 1) {
      statObjects.push({ position: category, stats: statArray[0].stat });
    } else {
      for (let i = 0; i < statArray.length; i++) {
        statObjects.push({
          position: statArray[i].position.abbreviation,
          stats: statArray[0].stat,
        });
      }
    }
  };

  if (props.grouping === "career") {
    careerFunction();
  }

  console.log(statObjects);
  let statCount = statObjects.length;
  console.log(statCount);

  return (
    <Fragment>
      {statCount < 1 && <div>No {category} Stats Avaliable</div>}
      {statCount > 0 && (
        <div>
          <table>
            <caption>{category}</caption>
            <thead></thead>
          </table>
        </div>
      )}
    </Fragment>
  );
};

export default StatsTable;
