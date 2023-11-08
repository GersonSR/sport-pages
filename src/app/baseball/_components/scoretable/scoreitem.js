import { Fragment } from "react";
import SimpleScoreItem from "./scoreitems/simplescoreitem"
import VerboseScoreItem from "./scoreitems/verbosescoreitme";

const ScoreItem = ({ score, verbosity }) => {
    let content;

    if (verbosity === "simple") {
        content = <SimpleScoreItem score={score} verbosity={verbosity}></SimpleScoreItem>
    } else if (verbosity === "expanded") { 
        content = <VerboseScoreItem score={score} verbosity={verbosity}></VerboseScoreItem>
    }
    return (
        <Fragment>
            {content}
        </Fragment>
    );
};

export default ScoreItem;