import React from "react";
import Nav from "../components/Nav";
import Idea from "../components/Idea";
import getIdeaById from "@wasp/queries/getIdeaById";
import {useQuery} from "@wasp/queries";
import useStickyState from "../components/helpers/useStickyState";

function IdeaSection (props) {
    return (
        <div className="">
            <Nav />

            <h1 className="text-3xl font-bold underline">
                Todo App
            </h1>

            <Idea idea={props.idea} voteState={props.voteState} setVoteState={props.setVoteState}/>
        </div>
    );
}

function IdeaPage (props) {
    const [
        voteState,
        setVoteState
      ] = useStickyState({}, "votes")

    const {"data": idea, isFetching, error} = useQuery(getIdeaById, {id: props.match.params.id});
    return (
        <div className="">
            {idea && <IdeaSection idea={idea} voteState={voteState} setVoteState={setVoteState}/>}

            {isFetching && "Fetching..."}

            {error && `Error: ${error}`}
        </div>
    );
}

export default IdeaPage;
