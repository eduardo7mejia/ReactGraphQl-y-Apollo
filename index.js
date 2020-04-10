/**Configuración de Express */
import express from 'express';
//Permitir conectar GraphQl con express
import graphqlHTTP from 'express-graphql';
//Importar Schema
import schema from './schema';
//Importar Resolvers
import resolvers from './resolvers.js'
const root = resolvers;
const app= express();
app.get('/',(req, res)=>{
    res.send('Todo Listo Bebé');
});
app.use('/graphql', graphqlHTTP({
    // que schema va a utilizar cuando este en la URL
    schema,
    ///El resolver se pasa como rootValue
    rootValue: root,
    //Utilizar Graphiql
    graphiql: true
}));
app.listen(8000, ()=> console.log('El servidor esta funcionando Correctamente'));

