const graphql = require('graphql');
const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema,
        GraphQLID,
        GraphQLNonNull } = graphql;




const UserType = new GraphQLObjectType({
    name : 'User',
    fields : () => ({
        userId : {type : GraphQLID},
        name : {type : GraphQLString},

    })
});

const RootQuery = new GraphQLObjectType({
    name : '',
    fields : {
        user : {
            type : UserType,
            args : {
                id : {type : GraphQLID}
            },
            resolve(parent,args){
                
            }
        }
    }

});


const Mutation = new GraphQLObjectType({
    name : '',
    fields :{

    }

});





module.exports = new GraphQLSchema({
        query : RootQuery,
        mutation : Mutation
});
