import React from "react";
import Idea from "./Idea";

function getRandomIdea(ideas) {
    return ideas[Math.floor(Math.random() * ideas.length)]
}

function RandomIdea (props) {

    return (
        <div className="">
            <Idea idea={getRandomIdea(props.ideas)} showRefresh={true} />
        </div>
    );

}

export default RandomIdea;
