import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
    return (
        <section className="loading">
            <div className="container flexCol gap-3 justify-center items-center min-h-[calc(100vh-180px)]">
                <AiOutlineLoading className="text-3xl animate-spin" />
                <h1 className="text-3xl font-black">Loading ....</h1>
            </div>
        </section>
    )
}

export default Loading;