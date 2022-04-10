import React from "react";
import updateIdea from "@wasp/actions/updateIdea";
import useStickyState from "./helpers/useStickyState"


function Idea (props) {
    console.log(props)
    function voteStateControler(id, state, action) {
        console.log(state)
        if (action === 0) {
            return {
                canUpdate: true,
                update: 0
            }
        }

        else if (! (id in state)) {
            state[id] = action
            props.setVoteState({...state})                
            return {
                canUpdate: true,
                update: action,
            }
        }

        const canUpdate = state[id] !== action

        if (canUpdate) {
            state[id] = action
            props.setVoteState({...state})
        }

        return {
            canUpdate: canUpdate,
            update: 2 * action
        }
    }

    async function handleVotesChange(action) {
        try {
            const {canUpdate, update} = voteStateControler(props.idea.id, props.voteState, action)
            if (canUpdate) {
                await updateIdea({
                    "ideaId": props.idea.id,
                    "data": {
                        update,
                        votes: props.idea.votes
                    }
                })
            }
            
        } catch (error) {

            window.alert(`Error while updating idea: ${error.message}`);

        }

    }

    function canShowButton(direction) {
        const isInReach = direction == -1 ? props.voteState[props.idea.id] > -1 : props.voteState[props.idea.id] < 1
        return !(props.idea.id in props.voteState) || isInReach
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

                    {props.idea.url !== "" &&
                    <li>
                        <a href={props.idea.url}>
                            Link
                        </a>
                    </li>}
                </ul>

                { canShowButton(1) &&
                <button onClick={() => handleVotesChange(1)}>
                    Upvote
                </button>
                }
                { canShowButton(-1) &&
                <button onClick={() => handleVotesChange(-1)}>
                    DownVote
                </button>
                }
                { (props.showRefresh) &&
                <button onClick={() => handleVotesChange(0)}>
                    Refresh
                </button>
                }
            </div>
        </div>
    );

}
export default Idea;
