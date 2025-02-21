import { Link } from "react-router-dom"
import { FaRegSadCry } from "react-icons/fa";
import { IoArrowBackCircleSharp  } from "react-icons/io5"

const NotFoundPage = () => {
    return (
    <section className="error">
        <div className="container text-center pt-20 pb-10 m-auto flexCol gap-4 justify-center bg-white min-h-[calc(100vh-180px)]">
            <h2><FaRegSadCry className="mx-auto text-6xl w-auto h-auto icon"/></h2>
            <h1 className="text-xl font-black">Sorry, the page you looking for was not found.</h1>
            <Link className="flexRow gap-2 items-center justify-center text-white bg-black py-1.5 rounded" to="/"><IoArrowBackCircleSharp className=" w-auto h-auto icon" /> Return to Home</Link>
        </div>
    </section>
    )
}

export default NotFoundPage;