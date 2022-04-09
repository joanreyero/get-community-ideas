import React from "react";
import Nav from "../components/Nav";
import CreateIdeaForm from "../components/createIdeaForm";

function CreateIdeaPage () {

    return (
        <div className="">
            <Nav />

            <h1 className="text-3xl font-bold underline">
                Todo App
            </h1>

            <CreateIdeaForm />
        </div>
    );

}

export default CreateIdeaPage;
