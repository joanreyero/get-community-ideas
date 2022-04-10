import React from "react";
import updateIdea from "@wasp/actions/updateIdea";
import useStickyState from "./helpers/useStickyState"


function Idea (props) {

    const [
        voteState,
        setVoteState
      ] = useStickyState({}, "votes")

    function voteStateControler(id, state, action) {
        if (action === 0) {
            return {
                canUpdate: true,
                update: 0
            }
        }

        else if (! (id in state)) {
            state[id] = action
            setVoteState({...state})                
            return {
                canUpdate: true,
                update: action,
            }
        }

        const canUpdate = state[id] !== action

        if (canUpdate) {
            state[id] = action
            setVoteState({...state})
        }

        return {
            canUpdate: canUpdate,
            update: 2 * action
        }
    }

    async function handleVotesChange(action) {
        try {
            const {canUpdate, update} = voteStateControler(props.idea.id, voteState, action)
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
        const isInReach = direction == -1 ? voteState[props.idea.id] > -1 : voteState[props.idea.id] < 1
        return !(props.idea.id in voteState) || isInReach
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
