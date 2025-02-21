import { useState } from "react";
import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import { FaHouseUser } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa";

const SignForm = () => { 
    const [formData, setFormData] = useState({
        email: "",
        userName: "",
        phone: "",
        password: "",
    }); // form value state management

    //  form Submition function
    const handleSubmision = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    // input onchange function and set value  in the state
    const handleChangeFormData = (e) => {
        const {name, value} = e.target;

        if (name === "phone" && !/^\d*$/.test(value)) {
            return;
        }


        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    return (
        <>
            <section className="loginForm">
                <div className="container flexCol items-center justify-center min-h-[calc(100vh-180px)]">
                    <h1 className="text-2xl uppercase border-b-2 font-black my-7">Sign In Form</h1>
                    <form onSubmit={handleSubmision} className="flexCol gap-3 items-center">
                        {/* email Input */}
                        <div className="w-full max-w-xs">
                            <label htmlFor="email">Email</label>
                            <div className="relative">  
                                <MdEmail className="absolute top-1/2 transform -translate-y-1/2 left-3" />
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData?.email || ""}
                                    onChange={handleChangeFormData}
                                    className="border-2 rounded bg-white w-full pl-10 text-sm p-2 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                        {/* username Input */}
                        <div className="w-full max-w-xs">
                            <label htmlFor="userName">Username</label>
                            <div className="relative">  
                                <FaHouseUser className="absolute top-1/2 transform -translate-y-1/2 left-3" />
                                <input 
                                    type="text" 
                                    name="userName" 
                                    id="userName" 
                                    value={formData?.userName || ""}
                                    onChange={handleChangeFormData}
                                    className="border-2 rounded bg-white w-full pl-10 text-sm p-2 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                        {/* phone Input */}
                        <div className="w-full max-w-xs">
                            <label htmlFor="phone">Phone Number</label>
                            <div className="relative">  
                                <FaPhoneVolume className="absolute top-1/2 transform -translate-y-1/2 left-3" />
                                <input 
                                    type="text" 
                                    name="phone" 
                                    id="phone" 
                                    value={formData?.phone || ""}
                                    onChange={handleChangeFormData}
                                    className="border-2 rounded bg-white w-full pl-10 text-sm p-2 focus:outline-none"
                                    minLength="10"
                                    maxLength="15"
                                    required
                                />
                            </div>
                        </div>
                        {/* Password Input */}
                        <div className="w-full max-w-xs">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <TbPasswordUser className="absolute top-1/2 transform -translate-y-1/2 left-3"/>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    value={formData?.password || ""}
                                    onChange={handleChangeFormData}
                                    className="border-2 rounded bg-white w-full pl-10 text-sm p-2 focus:outline-none"
                                    minLength="6"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Term & Condition Input */}
                        <div className="w-full max-w-xs">
                            <div className="relative flexRow gap-3">
                                <input 
                                    type="checkbox" 
                                    name="checkbox" 
                                    id="checkbox" 
                                    value={formData?.checkbox || ""}
                                    onChange={handleChangeFormData}
                                    placeholder="Term & Condition"
                                    required
                                />
                                <label htmlFor="checkbox">Term & Condition</label>
                            </div>
                        </div>
                        {/* submit button */}
                        <button type="submit" className="bg-amber-500 text-white  rounded flexRow gap-3 justify-center items-center p-2 mt-3 cursor-pointer w-full max-w-xs">
                            Sign In 
                            <TbLogin2 />
                        </button>
                    </form>
                    <p className="my-7">have any account? <Link to="/login" className="font-black">Login Now</Link></p>
                </div>
            </section>
        </>
    )
}


export default SignForm;