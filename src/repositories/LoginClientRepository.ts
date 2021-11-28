import { AxiosResponse } from "axios";
import { ApiError } from "../services/ApiError";
import { AbstractRepository } from "./AbstractRepository";

export class LoginClientRepository extends AbstractRepository{

    private readonly endpoint: string = '/clients/login';
    
    async login(email:string, password:string){
        let response: AxiosResponse;

        try {
            response = await this.api.get(`${this.endpoint}?email=${email}&password=${password}`);
            return {
                error:false,
                ...response
            };
        } catch (error) {
           throw new ApiError(response!); 
        }
    }
}