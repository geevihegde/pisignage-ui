import React from 'react';
import { NavLink } from 'react-router-dom';
import { ForgotPass } from './ForgotPass';

import { SignUp } from './SignUp';

export const SignUpPage =() =>{
    return(
        <div className="w-11/12 ml-5 rounded-md " >
            <div className="flex items-center justify-center  space-x-2 mb-5">
                <div className="text-green-500">Create an Account now!</div>
                <NavLink to="/signup" className="group border border-green-500 flex items-center justify-center hover:bg-green-600 hover:text-white rounded-md text-green-500 h-10 w-40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                    Sign Up for free
                </NavLink>

            </div>
        </div>
    )
}