import React from "react";
import useStickyState from "./helpers/useStickyState";
import Idea from "./Idea";

function getRandomIdea(ideas) {
    return ideas[Math.floor(Math.random() * ideas.length)]
}

function RandomIdea (props) {

    return (
        <div className="">
            <Idea idea={getRandomIdea(props.ideas)} showRefresh={true} voteState={props.voteState} setVoteState={props.setVoteState}/>
        </div>
    );

}

export default RandomIdea;
