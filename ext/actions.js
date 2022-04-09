import HttpError from "@wasp/core/HttpError.js";

export const createIdea = async (args, context) => {

    const requiredFields = ["description"];
    for (const field of requiredFields) {

        if (!args[field]) {

            const statusCode = 400,
                message = `Missing required field: ${field}`,
                data = {args,
                    "missing": field};
            throw new HttpError(
                statusCode,
                message,
                data
            );

        }

    }
    return context.entities.Idea.create({
        "data": {"description": args.description,
            "link": args.link}
    });

};

export const updateIdea = async (args, context) => context.entities.Idea.update({
    "where": {"id": args.ideaId},
    "data": {
        "votes": args.data.votes + args.data.increment
    }
});
