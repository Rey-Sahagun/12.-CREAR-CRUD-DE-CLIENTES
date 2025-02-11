const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose");
const typeDefsProduct = require("./schemas/productSchema");
const typeDefsUser = require("./schemas/userSchema");
const resolversProduct = require("./resolvers/productResolver");
const resolversUser = require("./resolvers/userResolver");

const typeDefs = [ typeDefsProduct, typeDefsUser ];
const resolvers = [ resolversProduct, resolversUser ];

const startServer = async() => {
    //FYjFbIop9Ukr8fN2
    await mongoose.connect('mongodb+srv://alresahagungo:1234@serviciosweb.kzceu.mongodb.net/?retryWrites=true&w=majority&appName=ServiciosWeb');

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });

};

startServer();