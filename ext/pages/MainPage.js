import React from "react";
import Nav from "../components/Nav";
import RandomIdea from "../components/RandomIdea";
import getApprovedUnvotedIdeas from "@wasp/queries/getApprovedUnvotedIdeas";
import {useQuery} from "@wasp/queries";
import useStickyState from "../components/helpers/useStickyState";

function MainPage () {
    const [
        voteState,
        setVoteState
      ] = useStickyState({}, "votes")

    const {"data": ideas, isFetching, error} = useQuery(getApprovedUnvotedIdeas, {voted: Object.keys(voteState).map(id => parseInt(id))})
    
    return (
        <div className="">
            <Nav />

            <h1 className="text-3xl font-bold underline">
                Todo App
            </h1>

            {(ideas && (ideas.length > 0)) && <RandomIdea ideas={ideas} voteState={voteState} setVoteState={setVoteState} />}

            {(ideas && (ideas.length === 0)) && <div> No approved ideas left to vote </div>}

            {isFetching && "Fetching..."}

            {error && `Error: ${error}`}
        </div>
    );

}

export default MainPage;
