import axios from "axios";

export class Api {
    private urlBack = process.env.REACT_APP_API_URL;

    get apiInstance(){
        return axios.create({baseURL:this.urlBack});
    }
}