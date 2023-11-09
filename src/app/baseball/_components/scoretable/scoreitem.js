import { Fragment } from "react";
import SimpleScoreItem from "./scoreitems/simplescoreitem"
import VerboseScoreItem from "./scoreitems/verbosescoreitme";

const ScoreItem = ({ score, verbosity }) => {
    let content;

    if (verbosity === "simple") {
        content = <SimpleScoreItem score={score}></SimpleScoreItem>
    } else if (verbosity === "expanded") { 
        content = <VerboseScoreItem score={score}></VerboseScoreItem>
    }
    return (
        <Fragment>
            {content}
        </Fragment>
    );
};

export default ScoreItem;