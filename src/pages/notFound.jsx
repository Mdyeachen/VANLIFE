import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <section className="notFound">
            <div className="container text-center pt-20 pb-10 m-auto flexCol gap-4 justify-center bg-white">
                <h1 className="text-xl font-black">Sorry, the page you were looking for was not found.</h1>
                <Link to="/">Return to Home</Link>
                <span className="w-40 h-1 bg-black m-auto rounded-4xl overflow-hidden"></span>
            </div>
        </section>
    )
}

export default NotFound;