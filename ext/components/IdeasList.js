import React from "react";
import ListedIdea from "./ListedIdea";

function Ideas(props) {
    if (!props.ideas?.length) return 'No ideas'
    return props.ideas.map((idea, idx) => <ListedIdea idea={idea} key={idx} />)
}

function IdeasList (props) {

    return (
        <div className="">
            <Ideas ideas={props.ideas}/>
        </div>
    );

}

export default IdeasList;
