import React from "react";
import Idea from "./Idea";
import getIdeas from "@wasp/queries/getIdeas";
import {useQuery} from "@wasp/queries";

function Ideas(props) {
    if (!props.ideas?.length) return 'No ideas'
    return props.ideas.map((idea, idx) => <Idea idea={idea} key={idx} />)
}

function IdeasList () {

    const {"data": ideas, isFetching, error} = useQuery(getIdeas);

    return (
        <div className="">
            {ideas && <Ideas ideas={ideas} />}

            {isFetching && "Fetching..."}

            {error && `Error: ${error}`}
        </div>
    );

}

export default IdeasList;
