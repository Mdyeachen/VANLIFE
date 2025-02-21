import { Link, useRouteError } from "react-router-dom";
import { BiSolidMessageAltError } from "react-icons/bi";
import { IoArrowBackCircleSharp  } from "react-icons/io5"

const ErrorHandle = (error) => {
    return (
        <section className="loading">
            <div className="container flexCol gap-2 justify-center items-center min-h-[calc(100vh-180px)] border-y-2 ">
            <BiSolidMessageAltError className="text-3xl" />
            <h1 className="text-2xl text-center font-black">{error.message}</h1>
                <Link className="flexRow gap-2 items-center justify-center text-white bg-black px-2 py-1.5 mt-5 rounded" to="/"><IoArrowBackCircleSharp className=" w-auto h-auto icon" /> Return to Home</Link>
            </div>
        </section>
    )
}

const LoaderError = () => {
    const error = useRouteError();
    return (
        <section className="loading">
            <div className="container flexCol gap-2 justify-center items-center min-h-[calc(100vh-180px)] border-y-2 ">
                <BiSolidMessageAltError className="text-3xl" />
                <h1 className="text-2xl text-center font-black">{error?.message || "Something goes wrong"}</h1>
                <pre>{error?.code} - {error?.status}</pre>
                <Link className="flexRow gap-2 items-center justify-center text-white bg-black px-2 py-1.5 mt-5 rounded" to="/"><IoArrowBackCircleSharp className=" w-auto h-auto icon" /> Return to Home</Link>
            </div>
        </section>
    )
}

export { ErrorHandle, LoaderError };