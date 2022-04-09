import React from "react";
import Nav from "../components/Nav";
import IdeasList from "../components/IdeasList";

function ListIdeaPage () {

    return (
        <div className="">
            <Nav />

            <h1 className="text-3xl font-bold underline">
                Todo App
            </h1>

            <IdeasList />
        </div>
    );

}

export default ListIdeaPage;
