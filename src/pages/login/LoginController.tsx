import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { LoginClientRepository } from "../../repositories/LoginClientRepository";
import { LoginProviderRepository } from "../../repositories/LoginProviderRepository";
interface IState {
    clientType?:"Client"|"Provider"
    email?:string
    password?:string
};
export const LoginController = () => {
    const clientRepository = new LoginClientRepository();
    const providerRepository = new LoginProviderRepository();
    const [state, setState] = useState<IState>();

    const handleRadionButtonState = useCallback((clientType:IState["clientType"])=> {
        setState(prevState => ({...prevState, clientType}))
    },[]);

    const handleEmailInputState = useCallback((email:string)=> {
        setState(prevState => ({...prevState, email}))
    },[]);

    const handlePasswordInputState = useCallback((password:string)=> {
        setState(prevState => ({...prevState, password}))
    },[]);

    const login = useCallback(async() => {
        try {
            let response: AxiosResponse;
            console.log(state?.clientType);
            if(state?.clientType === "Client"){
                response = await clientRepository.create(state?.email!, state?.password!);
                console.log(response);
                return response;
            }else{
                response = await providerRepository.create(state?.email!, state?.password!);
                console.log(response);
                return response;
            }
            
        } catch (error) {
            console.error(error);
        }
    }, [state?.email, state?.password, state?.clientType]);
    return {login, handleRadionButtonState, handleEmailInputState, handlePasswordInputState ,state};
}

