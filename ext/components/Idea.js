import React from "react";
import updateIdea from "@wasp/actions/updateIdea";

function Idea (props) {

    async function handleVotesChange(increment) {
        try {

            await updateIdea({
                "ideaId": props.idea.id,
                "data": {increment,
                    "votes": props.idea.votes}
            });

        } catch (error) {

            window.alert(`Error while updating idea: ${error.message}`);

        }

    }

    return (
        <div>
            <div>
                <h3>
                    {props.idea.description}
                </h3>

                <ul>
                    <li>
                        Votes:
                        {props.idea.votes}
                    </li>

                    {props.idea.link !== "" &&
                    <li>
                        <a href={props.idea.link}>
                            Link
                        </a>
                    </li>}
                </ul>

                <button onClick={() => handleVotesChange(1)}>
                    Upvote
                </button>

                <button onClick={() => handleVotesChange(-1)}>
                    DownVote
                </button>
                <button onClick={() => handleVotesChange(0)}>
                    Refresh
                </button>
            </div>
        </div>
    );

}
export default Idea;
