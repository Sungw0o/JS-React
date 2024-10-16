import axios from "axios"


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    parmas:{
        api_key: "80e856ec71fe643ffb5d8def074952d0",
        language: "ko-KR"
    },
});

export default instance;