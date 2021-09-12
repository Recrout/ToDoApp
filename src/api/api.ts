import {TodoItem} from "./models/TodoItem";
import axios, {AxiosInstance, AxiosResponse} from "axios";


class Api {
    private apiURL: string;
    private readonly axiosInstance: AxiosInstance
    constructor(apiURL : string = "http://localhost:8000/api") {
        this.apiURL = apiURL
        this.axiosInstance = axios.create({
            baseURL: apiURL,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
    }

    GetTodos = () : Promise<AxiosResponse<TodoItem[]>> => {
        return this.axiosInstance.get<TodoItem[]>(('/todo'))
    }

    CreateTodo = (todo : TodoItem) : Promise<AxiosResponse<void>> => {
        return this.axiosInstance.post('/todo/', todo)
    }


}

export default Api