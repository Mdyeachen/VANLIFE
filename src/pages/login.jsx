import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";

const Login = () => {

    const [ loginFormData , setLoginFormData ] = useState({ email : "", password : ""})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginFormData)
    }

    const handleChange = (e) => {
        const {name, value } = e.target;
        setLoginFormData(prev => ({...prev, [name] : [value]}));
    }


    return (
        <div className="login-form flexCol justify-center items-center py-4 min-h-96">
            <div className="loginFormPage bg-white p-6 rounded w-fit">
                <h1 className="text-xl font-black mb-4">Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="loginForm flexCol gap-3 items-center">
                    
                    {/* Email Input with Icon */}
                    <div className="relative w-full max-w-xs">
                        <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input 
                            onChange={handleChange}
                            className="border-2 rounded bg-white w-full pl-10 text-sm p-2 focus:outline-none" 
                            name="email" 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email" 
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative w-full max-w-xl">
                        <RiLockPasswordFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input 
                        onChange={handleChange}
                        className="border-2 rounded bg-white w-full pl-10 text-sm p-2 focus:outline-none" 
                        name="password" 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                    />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="flexRow justify-center gap-3 items-center bg-orange-500 text-white p-2 rounded cursor-pointer w-full max-w-xs transition hover:bg-gray-600"
                    >
                        Log in
                        <IoIosLogIn className="text-white" />
                    </button>

                    
                </form>
            </div>

        </div>
    );
}

export default Login;
