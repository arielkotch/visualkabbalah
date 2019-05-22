//express usually creates different routes
//graphql + express --- > one endpoint includes a schema file 

var graphqlHTTP=require('express-graphql');
const schema=require('./schema.js')
const express = require('express');
const cors=require('cors');
const app = express();
//allow cross origin 
app.use(cors());
//graphql endpoint
app.use('/graphql', graphqlHTTP({
    //point to schema
  schema: schema,
  //client tool for making calls to server
  graphiql: true
}));
const PORT=process.env.PORT || 7000;

app.listen(PORT,()=>(console.log(`Server Started on http://localhost:${PORT}`)));