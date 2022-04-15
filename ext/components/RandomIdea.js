import React from "react";
import Idea from "./Idea";

function RandomIdea (props) {

    function getRandomIdea(ideas) {
        return ideas[Math.floor(Math.random() * ideas.length)]
    }

    return (
        <div className="">
            <Idea idea={getRandomIdea(props.ideas)} showRefresh={true} voteState={props.voteState} setVoteState={props.setVoteState}/>
        </div>
    );

}

export default RandomIdea;
