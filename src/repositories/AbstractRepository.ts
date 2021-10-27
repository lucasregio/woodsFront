import { Api } from "../services/Api";

export abstract class AbstractRepository{
    protected api = new Api().apiInstance;
}