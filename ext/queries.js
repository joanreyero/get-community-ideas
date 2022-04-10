import HttpError from "@wasp/core/HttpError.js";


export async function getApprovedIdeas (args, context) {
    return context.entities.Idea.findMany({
        where: {
            isApproved: true
        }
    })
}


export async function getApprovedUnvotedIdeas (args, context) {

    if (!args.voted) {
        const statusCode = 400,
            message = `Missing required field: voted`,
            data = {args,
                "missing": 'voted'};
        throw new HttpError(
            statusCode,
            message,
            data
        )
    }

    let approvedIdeas = await context.entities.Idea.findMany({
        where: {
            isApproved: true
        }
    })


    return approvedIdeas.filter(idea => ! args.voted.includes(idea.id))
}


export async function getIdeaById (args, context) {
    if (!args.id) {
        const statusCode = 400,
            message = `Missing required field: id`,
            data = {args,
                "missing": 'id'};
        throw new HttpError(
            statusCode,
            message,
            data
        )
    }

    const id = parseInt(args.id)
    const idea = await context.entities.Idea.findUnique({
      where: { id },
    })

    if (!idea) {
        const statusCode = 404,
            message = `Idea with id ${id} not found`,
            data = {args}
        throw new HttpError(
            statusCode,
            message,
            data
        )
    }

    console.log(idea)

    return idea
}
