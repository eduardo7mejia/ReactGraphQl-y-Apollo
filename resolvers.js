/**Crear Clase  */
class Cliente{
    constructor(id,{nombre, apellidoPaterno, apellidoMaterno, edad, empresa ,email, telefono}){
        this.id=id;
        this.nombre=nombre;
        this.apellidoPaterno=apellidoPaterno;
        this.edad=edad;
        this.empresa=id;
        this.email=email;
        this.telefono=telefono;
    }
}
const clientesDB ={};
// El resolver es la respuesta del servidor (El resolver nos va a dar el resultado de nuestras consultas)
const resolvers = {
    /* cliente: ()=> {
        return{
            "id": "07",
            "nombre": "Luis Eduardo",
            "apellidoPaterno": "Mejia",
            "apellidoMaterno": "Moreno",
            "edad": "24",
            "empresa": "MejiApps",
            "email": "mejiaeduardo144@gmail.com",
            "telefono": "7291213348"
        }
    }, */
    /** */
    getCliente : ({id}) => {
        return new Cliente(id,clientesDB[id]);
    },
    crearCliente : ({input})=>{
        //Crear un número aleatorio para nuestros proximos datos creados 
        const id = require('crypto').randomBytes(10).toString('hex');
        clientesDB[id]= input;
        return new Cliente (id, input);
    }
};
export default resolvers;