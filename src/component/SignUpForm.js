import React, {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom'

export const SignUpForm = () =>{
    const HandleFormInput = (initialVal) =>{
        const [value,setValue] = useState(initialVal);
        const handleChange = (e) =>setValue(e.target.value);
        return {
            value,
            onChange:handleChange
        }
    }
    const userId = HandleFormInput('');
    const emailId = HandleFormInput('');
    const password = HandleFormInput('');
    const cnfPasswd = HandleFormInput('');
    const [validForm,setValidForm] = useState(true);
    const [message,setMessage] = useState('');
    useEffect(()=>{
        if(userId.value.length >2){
            const reqOptions = {
                method:"GET",
                headers:{'Content-Type':'application/json'},
            }
            fetch(`https://pisignage.com/api/usernames/${userId.value}`,reqOptions)
            .then(Response=>Response.json())
            .then(data=>{
                return setValidForm(data.data.available);
            })
        }
    },[userId.value])
    return(
        <div>
            <div className=" w-11/12 ml-5 text-red-600">
                {message}
            </div>
            <form className="space-y-4" onSubmit={(e)=>{
                e.preventDefault();
                const reqOptions = {
                    method: "POST",
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({role:'User',username:userId.value,email:emailId.value,password:password.value,retype_password:cnfPasswd.value})
                }
                fetch('https://pisignage.com/api/users', reqOptions)
                .then(Response=>Response.json())
                .then(data=>{
                    if(data.errors){
                        setMessage(data.message);
                    }
                    else
                        setMessage('');
                })
            }}>
                <input type="hidden" name="remember" value="true"/>
                <div className="rounded-md ml-5 w-11/12 space-y-4">
                    <div className="shadow-sm rounded-md">
                        <label htmlFor="user-id" className="sr-only">User Id</label>
                            <input id="userId" name="text" type="text" style={validForm?{}:{borderColor:'red'}} autoComplete="text" {...userId} required className="appearance-none rounded-none relative bg-gray-100 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="User Id"/>
                    </div>
                    <div className="shadow-sm rounded-md">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="text" type="text" autoComplete="text" {...emailId} required className="appearance-none rounded-none bg-gray-100 relative block w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                    </div>
                    <div className="shadow-sm rounded-md">
                        <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" {...password}  required className=" appearance-none bg-gray-100 rounded-none relative block w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                    </div>
                    <div className="shadow-sm rounded-md">
                        <label htmlFor="cnfPasswd" className="sr-only">Re-Enter the Password</label>
                            <input id="cnfPasswd" name="cnfPasswd" style={password.value===cnfPasswd.value?{}:{borderColor:'red'}} type="password"{...cnfPasswd} required className=" appearance-none rounded-none bg-gray-100 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Re-Enter the password"/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={!validForm || password.value!=cnfPasswd.value} className="group relative ml-5 w-11/12  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" >Sign Up</button>
                </div>
                <div className="w-11/12 ml-5 text-xs">By signing up, you agree to our <a className="group text-indigo-500 hover:underline hover:text-indigo-600" href="https://s3.amazonaws.com/pisignage/legal/piSignage-TOS.html">Terms Of Service</a> and <a className="group text-indigo-500 hover:underline hover:text-indigo-600" href="https://s3.amazonaws.com/pisignage/legal/piSignage-privacy.html">Privacy Policy</a></div>
                
            </form>
            <div className="flex items-center justify-center  space-x-2">
                <div className="mb-5 w-11/12">
                    <NavLink to="/" className="group flex items-center justify-center w-full rounded-md border border-green-500 h-10 text-green-500 hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                        Go to Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}