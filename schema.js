//SCHEMA 
//alot of different graphql types
//object types 
const {GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLBoolean,GraphQLList,GraphQLSchema} = require('graphql');
const axios=require('axios')


const User=new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id: {
            type: GraphQLInt
        },
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        avatar: {
            type: GraphQLString
        }
    })
});

const Data=new GraphQLObjectType({
        name:'Data',
        fields:()=>({
            data: {
                type: User
            }
        })
});
const DataList=new GraphQLObjectType({
    name:'DataList',
    fields:()=>({
        data: {
            type: new GraphQLList(User)
        }
    })
});

const Post=new GraphQLObjectType({
    name:'Post',
    fields:()=>({
        id:{type:GraphQLInt},
        title:{type:GraphQLString},
        body:{type:GraphQLString},
        author:{type:GraphQLString},
        image:{type:GraphQLString}
    })
});



//resolve is where data is actually accessed 
const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type: Data,
            args:{
                page:{
                    type:GraphQLInt
                }
            },
            resolve(parent,args){
                return axios.get(`https://reqres.in/api/users/${args.page}`).then((res)=>(res.data));
            }
        },
        users:{
            type: DataList,
            args:{
                page:{
                    type:GraphQLInt
                }
            },
            resolve(parent,args){
                return axios.get(`https://reqres.in/api/users?page=${args.page}`).then((res)=>(res.data));
            }
        },
        post:{
            type:Post,
            args:{
                id:{
                    type:GraphQLInt
                }
            },
            resolve(parent,args){
                return axios.get(`http://localhost:3000/posts/${args.id}`).then((res)=>(res.data));
            }
        },
        blog:{
            type:new GraphQLList(Post),
            resolve(parent,args){
                return axios.get(`http://localhost:3000/posts`).then((res)=>(res.data));
            }
        }
        
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery
});
