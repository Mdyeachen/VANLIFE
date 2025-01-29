import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Vans() {

  const [ vanDetials , setVanDetails ] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.105:3001/api/vans")
          .then(res => res.json())
          .then(data => setVanDetails(data))
  }, [])

  const vanElement = vanDetials.map(van => (
      <div key={van.id} className="van halfWidth">
        <Link to={`/vans/${van.id}`}>
          <img className="rounded" src={van.imageUrl} alt={van.name} />
          <div className="van-content font-bold flexCol relative gap-1.5 py-2">
            <h2 className="text-sm">{van.name}</h2>
            <div className="van-price flexCol text-sm leading-3 font-light absolute top-2 right-0">
              <span className="font-bold text-base">{van.price}</span>
              /day
            </div>
            <button type="button" className="bg-cyan-950 text-[12px] uppercase text-white py-0 px-6 rounded w-fit">{van.type}</button>
          </div>
        </Link>
      </div>
  ))

   return (
     <>
      <section className="vans-header">
        <div className="container">
          <h1 className="text-2xl font-bold py-6">Explore our van options</h1>
        </div>
      </section>
      
       <section className="vans">
        <div className="container flexRow gap-3 justify-between">
          {vanElement}
        </div>
       </section>
     </>
   )
 }
 
 export default Vans
 