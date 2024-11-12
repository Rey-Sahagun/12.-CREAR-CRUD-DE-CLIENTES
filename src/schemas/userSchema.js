const { gql } = require('apollo-server');

const typeDefs = gql`
    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        direction: String!
        phoneNumber: Int!
        resDate: String!
        type: String!
        payMethod: [String]!
    }
    
    type Query {
        users: [User]
    }

    type Mutation {
        createUser(
            name: String!
            email: String!
            password: String!
            direction: String!
            phoneNumber: Int!
            resDate: String!
            type: String!
            payMethod: [String]!   
        ): User!
        
        updateUser(
            _id: ID!
            name: String!
            email: String!
            password: String!
            direction: String!
            phoneNumber: Int!
            resDate: String!
            type: String!
            payMethod: [String]!
        ): User!

        deleteUser(_id: ID!): User!
    }
`;

module.exports = typeDefs;

