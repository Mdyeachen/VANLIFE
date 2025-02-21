import vanBanner from "../assets/images/about-img.png"

function About() {

   return (
     <>
       <section className="banner">
          <img 
          className="w-full max-h-72 md:max-h-[70vh] object-cover"
          src={vanBanner} alt="" />
       </section>

       <section className="about-content py-9 flexCol gap-7">
          <div className="container flexCol gap-5">
            <h1 className="text-2xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br /><span>(Hitch costs extra 😉)</span></p>

            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          </div>
          <div className="container">
            <div className="p-8 max-w-lg bg-orange-200 rounded font-[interBold] flexCol gap-4">
              <h2 className="text-xl font-bold">Your destination is waiting. Your van is ready.</h2>
              <button className="bg-black text-white p-2 rounded w-fit" type="button">Explore our vans</button>

            </div>
          </div>
       </section>
     </>
   )
 }
 
 export default About
 