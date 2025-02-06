import { Link, useRouteError } from "react-router-dom";
export function ErrorHandler() {
    const error = useRouteError();


    return (
        <section className="error">
            <div className="container text-center pt-20 pb-10 m-auto flexCol gap-4 justify-center bg-white">
                <h1 className="text-xl font-black">{error.message.toUpperCase()}</h1>
                <pre>{error.statusCode} - {error.status}</pre>
                <Link to="/">Return to Home</Link>
                <span className="w-40 h-1 bg-black m-auto rounded-4xl overflow-hidden"></span>
            </div>
        </section>
    )
}
