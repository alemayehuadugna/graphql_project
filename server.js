const express = require('express')
const ExpressGraphQL = require('express-graphql')
const app = express()
const { rootSchema } = require('./graphql/index')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/graphql', ExpressGraphQL({graphiql: true, schema: rootSchema}))

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})