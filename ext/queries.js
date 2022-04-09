export const getIdeas = async (args, context) => context.entities.Idea.findMany({});
