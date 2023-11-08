import { Fragment } from "react";
import SimpleScoreItem from "./scoreitems/simplescoreitem"

const ScoreItem = ({ score, verbosity }) => {
    let content;

    if (verbosity === "simple") {
        content = <SimpleScoreItem score={score} verbosity={verbosity}></SimpleScoreItem>
    } else if (verbosity === "expanded") { 
        content = <SimpleScoreItem score={score} verbosity={verbosity}></SimpleScoreItem>
    }
    return (
        <Fragment>
            {content}
        </Fragment>
    );
};

export default ScoreItem;