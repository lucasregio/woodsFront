import React from "react";
import { LoginController } from "./LoginController";

const navigation = [
    { name: 'Login Cliente', href: '/perfil', current: true },
    { name: 'Login Provedor', href: '/providerfeed', current: false },
  ]


function classNames(...classes: string[]) {
return classes.filter(Boolean).join(' ')
}

export default function Login() {
    const {login, handleRadionButtonState, state, handlePasswordInputState, handleEmailInputState} = LoginController();
    return(
        <div className={'container grid place-content-center min-w-full bg-cover bg-center bg-woods h-screen'}>
            <div className={'flex flex-col shadow-xl p-4 bg-gray-400 border border-black rounded-2xl w-96'}>
                <label className='text-center font-black'>E-mail</label>
                <input onChange={(e)=> handleEmailInputState(e.target.value)} type="text" className='rounded-2xl'/>
                <label className='text-center font-black'>Senha</label>
                <input onChange={(e)=> handlePasswordInputState(e.target.value)} type="password" className='rounded-2xl'/>
                {/* <div  className={'flex flex-col'}>
                    <label className='font-black'>Tipo de Usuário:</label>
                    <div className='p-4'>
                        <span className='p-7'></span>
                        <input checked={state?.clientType === "Cliente"} onChange={()=> handleRadionButtonState("Cliente")} type="radio"/><span className='p-2 font-medium'>Client</span>
                        <span className='p-8'></span>
                        <input checked={state?.clientType === "Provedor"} onChange={()=> handleRadionButtonState("Provedor")} type="radio"/><span className='p-2 font-medium'>Provider</span>
                    </div>
                </div> */}
                {/* <button 
                    className=' font-black bg-gradient-to-r from-yellow-400 to-white hover:from-white hover:to-yellow-400 rounded-2xl'
                    onClick = {() => login()}
                >
                    Login
                </button> */}
                <div className="mt-2 ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}