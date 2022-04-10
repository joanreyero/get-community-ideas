import HttpError from "@wasp/core/HttpError.js";

export async function createIdea(args, context) {
    const requiredFields = ["description", "twitterHandle", "category"];
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

    args.goals = args.goals || []

    return context.entities.Idea.create({
        "data": {
            description: args.description,
            url: args.url,
            twitterHandle: args.twitterHandle,
            category: {
                connectOrCreate: {
                    where: {
                        name: args.category.value
                    },
                    create: {
                        name: args.category.value
                    }
                }
            },
            goals: {
                connectOrCreate: args.goals.map(goal => ({
                    where: {
                        name: goal.value
                    },
                    create: {
                        name: goal.value
                    }
                }))
            }
        }
    })
}

export const updateIdea = async (args, context) => context.entities.Idea.update({
    where: {"id": args.ideaId},
    data: {
        votes: args.data.votes + args.data.update,
        updatedAt: new Date()
    }
});
