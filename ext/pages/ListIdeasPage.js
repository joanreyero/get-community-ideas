import React from "react";
import Nav from "../components/Nav";
import IdeasList from "../components/IdeasList"
import getIdeas from "@wasp/queries/getIdeas";
import {useQuery} from "@wasp/queries";

function ListIdeaPage () {
    const {"data": ideas, isFetching, error} = useQuery(getIdeas);

    return (
        <div className="">
            <Nav />

            <h1 className="text-3xl font-bold underline">
                Todo App
            </h1>
            {ideas && <IdeasList ideas={ideas} />}

            {isFetching && "Fetching..."}

            {error && `Error: ${error}`}

        </div>
    );

}

export default ListIdeaPage;
