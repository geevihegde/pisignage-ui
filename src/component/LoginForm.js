import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {ForgotPass} from './ForgotPass';
export const LoginForm = () =>{
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const reqOptions = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:userName,password:password})
        }
        fetch('https://pisignage.com/api/session/',reqOptions)
        .then(Response=>Response.json())
        .then(data=>console.log(data.settings));
    }
    return(
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md ml-5 w-11/12 shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                 id="email-address" 
                                 name="text" 
                                 type="text" 
                                 value={userName} 
                                 onChange={(e)=>setUserName(e.target.value)}
                                 autoComplete="text" 
                                 required className="
                                    appearance-none
                                    rounded-none 
                                    relative block 
                                    w-full
                                    px-3 
                                    py-2 
                                    border border-gray-300 
                                    placeholder-gray-500 
                                    text-gray-900 
                                    rounded-t-md 
                                    focus:outline-none 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    focus:z-10 
                                    sm:text-sm" 
                                 placeholder="Email or Username"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                                <input 
                                 id="password" 
                                 name="password" 
                                 type="password" 
                                 value={password}
                                 onChange={(e)=>setPassword(e.target.value)}
                                 autoComplete="current-password" 
                                 required className="
                                    appearance-none 
                                    rounded-none 
                                    relative block 
                                    w-full
                                    px-3 
                                    py-2 
                                    border border-gray-300 
                                    placeholder-gray-500 
                                    text-gray-900 rounded-b-md 
                                    focus:outline-none 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    focus:z-10 sm:text-sm"
                                 placeholder="Password"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <NavLink to="/forgot" className="group font-medium text-blue-400 ml-5 text-sm hover:text-blue-500 hover:underline" >
                            Forgot your password?
                        </NavLink>
                    </div>
                    <div>
                        <button type="submit" className="group relative m-5 w-11/12  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">Sign in</button>
                    </div>
                </form>
    )
}