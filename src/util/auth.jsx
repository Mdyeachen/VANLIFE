import { Outlet, redirect } from "react-router-dom"

export const authRequired = async ({ request }) => {
    
    const url = new URL(request.url).pathname; // get the pathname

    const isLogin = JSON.parse(localStorage.getItem("login")) || false; // Ensure it's boolean

    if (!isLogin) {
        throw redirect(`/login?message=login first&&redirectUrl=${url}`);
    }

    return  <Outlet />
};
