import axios from "axios";

export class Services{
    static serverURL =  "http://localhost:8080";

    static  getAllArticles(){
        let  dataURL = `${this.serverURL}/api/allArticles`;
        return axios.get(dataURL);
    }
}