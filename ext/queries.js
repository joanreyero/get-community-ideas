export const getIdeas = async (args, context) => context.entities.Idea.findMany({});
export const getIdeaById = async (args, context) => {
    // TODO: Do some error handling?
    const id = parseInt(args.id)
    console.log('ID: ', id)
    const article = await context.entities.Idea.findUnique({
      where: { id },
    })
    return article
  }
