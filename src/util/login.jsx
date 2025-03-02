import { 
    Link,
     useLoaderData, 
    Form, 
    redirect, 
    useActionData 
} from "react-router-dom";
import { TbLogin2 } from "react-icons/tb";
import { FaHouseUser } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { loginUser } from "./api";

export const ActionFun = async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    //get the redirect url
    const redirectPageUrl = new URL(request.url).searchParams.get('redirectUrl'); 
    const redirectUrl = redirectPageUrl || "/host";

    
    try{
        const data = await loginUser({username, password})
        localStorage.setItem('login', true);
        return redirect(redirectUrl);
    }catch(err) {
        localStorage.setItem('login', false);
        return err.message || "Login failed. Please try again."
    }

}



const LoginForm = () => { 

    const loaderData = useLoaderData() // loader data
    const error = useActionData(); // get the action data    

    return (
        <>
            <section className="loginForm">
                <div className="container flexCol items-center justify-center min-h-[calc(100vh-180px)]">
                    { loaderData && <p className="text-xl uppercase text-red-600 ">{loaderData}</p>}
                    {error && (<h3 className="text-red-500">{error}</h3>)}
                    
                    <h1 className="text-2xl uppercase border-b-2 font-black my-7">Login Form</h1>
                    <Form 
                    method="post" 
                    className="flexCol gap-3 items-center"
                    replace
                    >
                        {/* username Input */}
                        <div className="w-full max-w-xs">
                            <label htmlFor="username">Username</label>
                            <div className="relative">  
                                <FaHouseUser className="absolute top-1/2 transform -translate-y-1/2 left-3" />
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    className="border-2 rounded bg-white w-full pl-10 text-sm p-2 focus:outline-none"
                                    aria-label="username"
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
                                    className="border-2 rounded bg-white w-full pl-10 text-sm p-2 focus:outline-none"
                                    aria-label="password"
                                    required
                                />
                            </div>
                            <p><Link to="/">Forgat Password</Link></p>
                        </div>
                        {/* submit button */}
                        <button 
                            type="submit" className="bg-amber-500 text-white  rounded flexRow gap-3 justify-center items-center p-2 mt-3 cursor-pointer w-full max-w-xs"
                            aria-label="Login"
                        >
                            Login
                            <TbLogin2 />
                        </button>
                    </Form>
                    <p className="my-7">{`Don't`} have any account? <Link to="/signin" className="font-black">Create new one</Link></p>
                </div>
            </section>
        </>
    )
}



export default LoginForm;