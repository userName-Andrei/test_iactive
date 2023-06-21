import axios from "axios";

const instance = axios.create({
    baseURL: "http://a0830433.xsph.ru/",
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export default instance;
