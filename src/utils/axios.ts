import axios from "axios";

const instance = axios.create({
    baseURL: "https://my-blog-mern-server.onrender.com/",
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export default instance;
