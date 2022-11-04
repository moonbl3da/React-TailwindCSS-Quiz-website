import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route)
    {
        if (route === location.pathname)
        {
            return true;
        }
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="logo" className='h-5 cursor-pointer' onClick={() => navigate("/")}/>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-blue-500 "}`} onClick={() => navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent ${pathMatchRoute("/quiz") && "text-black border-b-blue-500 "}`} onClick={() => navigate("/quiz")}>Quiz</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-blue-500 "}`} onClick={() => navigate("/sign-in")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
