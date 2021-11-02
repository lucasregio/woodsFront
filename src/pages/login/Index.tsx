import React from "react";
import { LoginController } from "./LoginController";

export default function Login() {
    const {login, handleRadionButtonState, state, handlePasswordInputState, handleEmailInputState} = LoginController();
    return(
        <div className={'container grid place-content-center min-w-full bg-cover bg-center bg-woods   h-screen'}>
            <div className={'flex flex-col shadow-xl p-4 bg-gray-400 border border-black rounded-2xl w-96'}>
                <label className='text-center font-black'>E-mail</label>
                <input onChange={(e)=> handleEmailInputState(e.target.value)} type="text" className='rounded-2xl'/>
                <label className='text-center font-black'>Pasword</label>
                <input onChange={(e)=> handlePasswordInputState(e.target.value)} type="password" className='rounded-2xl'/>
                <div  className={'flex flex-col'}>
                    <label className='font-black'>User Type:</label>
                    <div className='p-4'>
                        <span className='p-7'></span>
                        <input checked={state?.clientType === "Client"} onChange={()=> handleRadionButtonState("Client")} type="radio"/><span className='p-2 font-medium'>Client</span>
                        <span className='p-8'></span>
                        <input checked={state?.clientType === "Provider"} onChange={()=> handleRadionButtonState("Provider")} type="radio"/><span className='p-2 font-medium'>Provider</span>
                    </div>
                </div>
                <button 
                    className=' font-black bg-gradient-to-r from-yellow-400 to-white hover:from-white hover:to-yellow-400 rounded-2xl'
                    onClick = {() => login()}
                >
                    Sing in
                </button>
            </div>
        </div>
    );
}