import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8000/api",

    headers:{
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }

})

export default http