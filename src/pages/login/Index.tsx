import React from "react";

export default function Login() {
    return(
        <div className={'container grid place-content-center min-w-full bg-gray-400 h-screen'}>
            <div className={'flex flex-col p-4 border border-gray-500 roudend w-96'}>
                <label>E-mail</label>
                <input type="text" />

                <label>Pasword</label>
                <input type="password" />
                <div className={'flex flex-col'}>
                    <label>User Type:</label> 
                    <input type="radio"/><span>Client</span>
                    <input type="radio"/><span>Provider</span>
                </div>
                <button>
                    Sing in
                </button>
            </div>
        </div>
    );
}