import React from "react";
import Nav from "../components/Nav";
import RandomIdea from "../components/RandomIdea";
import getIdeas from "@wasp/queries/getIdeas";
import {useQuery} from "@wasp/queries";

function MainPage () {
    const {"data": ideas, isFetching, error} = useQuery(getIdeas);
    return (
        <div className="">
            <Nav />

            <h1 className="text-3xl font-bold underline">
                Todo App
            </h1>

            {ideas && <RandomIdea ideas={ideas} />}

            {isFetching && "Fetching..."}

            {error && `Error: ${error}`}
        </div>
    );

}

export default MainPage;
