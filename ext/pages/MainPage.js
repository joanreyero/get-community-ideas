import React from "react";
import Nav from "../components/Nav";
import RandomIdea from "../components/RandomIdea";

function MainPage () {

    return (
        <div className="">
            <Nav />

            <h1 className="text-3xl font-bold underline">
                Todo App
            </h1>

            <RandomIdea />
        </div>
    );

}

export default MainPage;
