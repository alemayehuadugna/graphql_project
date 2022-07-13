const graphql = require('graphql')
const { TaskType } = require('./models/task')
const { queryAllTasks, resolveAddTask, resolveUpdateTask, resolveDeleteTask } = require('../db/task')


const resolvers = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        // query all
        Tasks: {
            type: graphql.GraphQLList(TaskType),
            resolve: queryAllTasks
        }
    }
})

const mutations = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // query all
        addTask: {
            //type of object to return after create in SQLite
            type: TaskType,
            //argument of mutation creactePost to get from request
            args: {
                isCompleted: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLBoolean)
                },
                task:{
                    type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                }
            },
            resolve: resolveAddTask
        }, 
        updateTask: {
            //type of object to return after create in SQLite
            type: TaskType,
            //argument of mutation creactePost to get from request
            args: {
                id: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                },
                isCompleted: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLBoolean)
                }
            },
            resolve: resolveUpdateTask
        }, 
        deleteTask: {
            //type of object to return after create in SQLite
            type: TaskType,
            //argument of mutation creactePost to get from request
            args: {
                id: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                },
            },
            resolve: resolveDeleteTask
        }
    }
})

const rootSchema = new graphql.GraphQLSchema({
    query: resolvers,
    mutation: mutations
})

module.exports = {
    rootSchema
}