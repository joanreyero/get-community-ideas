import React from "react";
import updateIdea from "@wasp/actions/updateIdea";
import {useHistory} from "react-router-dom";

function ListedIdea (props) {
    const history = useHistory()

    return (
        <div>
            <div>
                {props.idea.description}, Votes: {props.idea.votes}. <button onClick={() => history.push(`/idea/${props.idea.id}`)}>Upvote</button>
            </div>
        </div>
    );

}
export default ListedIdea;
