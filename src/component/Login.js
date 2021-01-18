import React, { useState } from 'react';
import {SignUpPage} from './SignUpPage';
import {LoginForm} from './LoginForm';

export const Login = () =>{
    
    return(
        <div className="min-h-screen flex items-center justify-center bg-cyan-800">
            <div className="bg-gray-100 rounded-xl shadow-md max-w-md w-full space-y-10">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please Sign-in!</h2>
                </div>
                <LoginForm/>
                <SignUpPage/>

            </div>

        </div>
    )
}