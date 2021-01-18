import React from 'react';
import { SignUpForm } from './SignUpForm';
export const SignUp = () =>{
   
    return(
        <div className="min-h-screen flex items-center justify-center bg-cyan-800 ">
            <div className="bg-gray-50 rounded-xl shadow-md max-w-md w-full space-y-6">
                <div>
                    <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900">Create an Account now!</h2>
                </div>
                <div className="flex justify-items-stretch text-sm w-11/12 ml-5 text-gray-600">Signing up at pisignage.com is easy and we do not ask any Credit Card information. By signing up,you get 2 free player licenses along with free subscription for the hosted service.</div>
                <SignUpForm/>
            </div>
        </div>
    )
}