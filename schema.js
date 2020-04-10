import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellidoPaterno: String
        apellidoMaterno: String
        edad: Int
        empresa: String
        email: String
        telefono: String
    }
    type Query{
            getCliente(id: ID): Cliente
    }
    input ClienteInput{
        id: ID
        nombre: String!
        apellidoPaterno: String!
        apellidoMaterno: String!
        edad: Int
        empresa: String
        email: String!
        telefono: String
    }
    type Mutation{
        crearCliente(input: ClienteInput): Cliente
    }
    
`);
export default schema;