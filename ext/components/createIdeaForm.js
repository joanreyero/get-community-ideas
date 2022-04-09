import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import createIdea from "@wasp/actions/createIdea";


function CreateIdeaForm () {

    const history = useHistory()

    const {register, handleSubmit, "formState": {errors}} = useForm()
    
    const onSubmit = async ({description, link}) => {

            await createIdea({description,
                link});
            history.push("/");

        };

    return (

    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Registering a required Description and error */}

            <div>
                <h3>
                    {" "}
                    Description
                </h3>

                <input {...register(
                    "description",
                    {"required": true}
                )}
                />

                {errors.description && <span>
                    This field is required
                </span>}
            </div>

            <div>
                <h3>
                    {" "}
                    Link
                </h3>

                {/* Registering a non-required Link */}

                <input {...register("link")} />
            </div>

            <input type="submit" />
        </form>
    );

}

export default CreateIdeaForm;
