const graphql = require('graphql')

const TaskType = new graphql.GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: graphql.GraphQLID },
        isCompleted: { type: graphql.GraphQLBoolean },
        task: { type: graphql.GraphQLString }
    }
})

module.exports = {
    TaskType
}