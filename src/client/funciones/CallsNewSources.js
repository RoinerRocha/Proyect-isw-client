import axios from "axios";
const todoSources = async (state)=> {
    const peticion = await axios.get('http://localhost:5000/newsource')
    state(peticion.data);
}
export {
    todoSources
}