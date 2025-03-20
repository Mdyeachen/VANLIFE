import { defer } from "react-router-dom";
import { getVans } from "./api";

export async function VansLoader() {
    const vandataPromise = getVans()
    return defer({vans : vandataPromise})
}

export async function VanLoader({ params }) {
    return getVans(params.id)
}

// login loader
export async function LoginLoader ({ request}){
    return new URL(request.url).searchParams.get('message')
 }

