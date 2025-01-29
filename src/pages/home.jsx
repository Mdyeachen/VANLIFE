import home from "../assets/images/home.png"

function Home() {

  return (
    <>
      <section 
        className="home-page bg-cover bg-center relative z-1 min-h-[75vh] flex items-center after:bg-black after:h-full after:w-full after:absolute after:top-0 after:left-0 after:z-[-1] after:opacity-20"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="container">
          <div className="text-white flexCol gap-4 max-w-lg">
            <h1 className="text-3xl font-bold">You got the travel plans, we got the travel vans.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi praesentium tempore ab enim ut officiis nostrum, exercitationem commodi optio nemo.</p>
            <button type="button" className="bg-yellow-600 w-full py-2 font-bold rounded-sm">Find your van</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
