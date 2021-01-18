import React from 'react';
import { SignUpForm } from './SignUpForm';

export const ResellerSignup = () =>{
    return(
        <div className="min-h-screen flex items-center justify-center bg-cyan-800 ">
            <div className="bg-gray-50 rounded-xl shadow-md max-w-md w-full space-y-6">
                <div>
                    <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900">Signup as Reseller for piSignage!</h2>
                </div>
                <div className="flex justify-items-stretch text-sm w-11/12 ml-5 text-gray-600">Signup as reseller for piSignage to get reseller benefits,a minimum commitment of USD 300 is needed to unlock the benefits.</div>
                <SignUpForm/>
            </div>

        </div>
    )
}