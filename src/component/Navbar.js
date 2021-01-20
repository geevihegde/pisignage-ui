import React, { useState } from 'react';
import logo from './../img/pisignage.png';
import {NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';
const TwitterLink = () =>{
    const bannerShow=false;
    const isPisignage = true;
    if(bannerShow)
        return(
            <div className="hidden sm:block sm:ml-6 text-gray-200 text-xs hover:underline">
                    We prefer chrome browser {isPisignage? "please report issues at support@pisignage.com":""}
            </div>
        )
    else    
        return(
            <div className="hidden sm:block sm:ml-6 text-gray-200 text-xs hover:underline">
                Follow us at twitter.com/piSignage to get the latest updates, tips and more
            </div>
        )
}
export const Navbar = () =>{
    const [toggleSidebar,setToggleSidebar] = useState(false);
    const [toggleProfile,setToggleProfile] = useState(false);
    
    return(
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/*<!-- Mobile menu button-->*/}
                <button onClick={()=>setToggleSidebar(!toggleSidebar)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {/*<!-- Icon when menu is closed. -->
                <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                -->*/}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/*<!-- Icon when menu is open. -->
                <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                -->*/}
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <NavLink to="/lp">
                <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src={logo} alt="Logo"/>
                <img className="hidden lg:block h-8 w-auto" src={logo} alt="Logo"/>
                </div>
                </NavLink>
                <a href="https://twitter.com/pisignage" >
                    <TwitterLink/>
                </a>
        
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span>Language</span>
                </button>

                {/*<!-- Profile dropdown -->*/}
                <div class="relative inline-block text-left">
 

            </div>
                <div className="ml-3 relative">
                <div>
                <button type="button" onClick={()=>setToggleProfile(!toggleProfile)} class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">Welcome User</button>
                </div>
                <Transition
                    show={toggleProfile}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                        {(ref)=>(
                                <div ref={ref} class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div class="py-1">
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Edit</a>
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Duplicate</a>
                                </div>
                                <div class="py-1">
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Archive</a>
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Move</a>
                                </div>
                                <div class="py-1">
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Share</a>
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Add to favorites</a>
                                </div>
                                <div class="py-1">
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Delete</a>
                                </div>
                              </div>
                                
                            
                        )}
                </Transition>
                {/*<!--
                    Profile dropdown panel, show/hide based on dropdown state.

                    Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->*/}
                
                </div>
            </div>
            </div>
        </div>

        {/*<!--
            Mobile menu, toggle classes based on menu state.

            Menu open: "block", Menu closed: "hidden"
        -->*/}
        <div className={toggleSidebar ? "block sm:block":"hidden sm:hidden"}>
            <div className="px-2 pt-2 pb-3 space-y-1">
            {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
        </div>
        </nav>

    )
}