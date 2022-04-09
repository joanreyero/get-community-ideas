import React from "react";
import Idea from "./Idea";
import getIdeas from "@wasp/queries/getIdeas";
import {useQuery} from "@wasp/queries";

function getRandomIdea(ideas) {
    return ideas[Math.floor(Math.random() * ideas.length)]
}

function RandomIdea () {

    const {"data": ideas, isFetching, error} = useQuery(getIdeas);
    return (
        <div className="">
            {ideas && <Idea idea={getRandomIdea(ideas)} />}

            {isFetching && "Fetching..."}

            {error && `Error: ${error}`}
        </div>
    );

}

export default RandomIdea;
