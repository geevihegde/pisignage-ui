import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const ForgotPass = () =>{
    const [userId,setUserId] = useState('');
    const  [message,setMessage] = useState('');
    const [color,setColor] = useState({});

    return(
        <div className="min-h-screen flex items-center justify-center bg-cyan-800 ">
            <div className="bg-gray-50 rounded-xl shadow-md max-w-md w-full space-y-6">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please Enter username or email</h2>
                </div>
                <div style={color} className=" w-11/12 ml-5">
                    {message}
                </div>
                <form className="space-y-4" onSubmit={(e)=>{
                    e.preventDefault();
                    const reqOptions = {
                        method:"POST",
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify(userId.includes("@")?{email:userId}:{username:userId})
                    }
                    fetch('https://pisignage.com/sendpasswordlink',reqOptions)
                    .then(response=>{
                        if(response.ok)
                           return response.text()

                        throw new Error('');
                    })
                    .then(data=>{
                                setColor({color:"#14a44c"})
                        return setMessage('Password reset Link sent to registered email id!!')
                    })
                    .catch(err=>{
                            setColor({color:'#ff0000'})
                        return setMessage('Username or Email not available')
                    })
                 }} >
                    <div className="rounded-md ml-5 w-11/12 space-y-4">
                        <div className="shadow-sm rounded-md">
                            <label htmlFor="userId" className="sr-only">User Id</label>
                                <input id="userId" name="text" type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} autoComplete="text"  required className="appearance-none rounded-none relative bg-gray-100 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="User Id or Email Address"/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative ml-5 w-11/12  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" >Submit</button>
                    </div>
                </form>
                <div className="flex items-center justify-evenly  w-11/12 ml-5">
                    <NavLink to="/" className="group border border-blue-500 flex items-center justify-center mb-5 hover:bg-blue-600 hover:text-white rounded-md text-blue-500 h-10 w-40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                        Back to LogIn
                    </NavLink>
                    <NavLink to="/signup" className="group border border-green-500 flex items-center justify-center mb-5 hover:bg-green-600 hover:text-white rounded-md text-green-500 h-10 w-40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                        Sign Up Now!
                    </NavLink>
                </div>
                
            </div>
        </div>
    )
}