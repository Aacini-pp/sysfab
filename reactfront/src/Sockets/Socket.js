import io from "socket.io-client"

export let socket = io("//localhost:8080") //TODO: AGREGAR UNA OPCION GLOBAL PARA LA DIRECCION


const conectarSocket = () => {

    return socket = io("//localhost:8080")

}

export default conectarSocket
