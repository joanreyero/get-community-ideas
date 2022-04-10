import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import createIdea from "@wasp/actions/createIdea";
import getCategoriesAndGoals from "@wasp/queries/getCategoriesAndGoals";
import {useQuery} from "@wasp/queries";
import Message from "./message";

function CreateIdeaForm () {

    const history = useHistory()

    const [submitted, setSumbitted] = useState(false);
    
    const {register, handleSubmit, "formState": {errors}, control} = useForm()

    const {"data": categoriesAndGoals, isFetching, error} = useQuery(getCategoriesAndGoals);

    function toSelectInput(data) {
        return data.map(item => ({value: item, label: item}))
    }
    const waitAfterSuccess = 2000
    useEffect(() => {
        if (submitted) {
            setTimeout(() => {
                history.push("/")
            }, waitAfterSuccess);
        }
    },[submitted])

    async function onSubmit(data) {
        await createIdea(data)
        setSumbitted(true)
        // history.push({
        //     pathname: "/",
        // });
    }


    return (
        <div className="App">
            {(categoriesAndGoals) &&
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="description"> Description </label>
                    <input placeholder="" {...register("description", {required: true})} />
                    {errors.description && <span> This field is required </span>}
                </div>
                <div>
                    <label htmlFor="twitterHandle"> Twitter Handle </label>
                    <input placeholder="" {...register("twitterHandle", {required: true})} />
                    {errors.twitterHandle && <span> This field is required </span>}
                </div>
                <div>
                    <label htmlFor="url"> URL </label>
                    <input placeholder="" {...register("url")} />
                </div>
                <div>
                    <label className="">Goals</label>
                    <Controller
                    name="goals"
                    control={control}
                    render={({ field }) => {
                        return (
                        <CreatableSelect
                            className="reactSelect"
                            name="goals"
                            placeholder="Goals"
                            options={toSelectInput(categoriesAndGoals.goals)}
                            isMulti
                            useCreatable
                            {...field}
                        />
                        );
                    }}
                    />
                </div>
                <div>
                    <label className="">Category</label>
                    <Controller
                    name="category"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => {
                        return (
                        <CreatableSelect
                            className="reactSelect"
                            name="category"
                            placeholder="Category"
                            options={toSelectInput(categoriesAndGoals.categories)}
                            useCreatable
                            {...field}
                        />
                        );
                    }}
                    />
                    {errors.category && <span> This field is required </span>}
                </div>
                <button type="submit">Submit</button>
                </form>
            }
            {isFetching && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {submitted && <Message message={{status: 200, body: "Idea submitted succesfully"}} delay={waitAfterSuccess} />}
        </div>
    )
}

export default CreateIdeaForm;
