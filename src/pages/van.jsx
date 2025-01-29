import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go"

function Van() {

  const param = useParams();
  const [ van, setVan ] = useState(null);

  useEffect(() => {
    fetch(`http://192.168.0.105:3001/api/vans/${param.id}`)
          .then(res => res.json())
          .then(data => setVan(data));
  }, [param.id])


   return (
     <>
      <section className="vans-header">
        <div className="container">
          { van ? (
          <>
          <Link to=".." className="flexRow items-center gap-2 py-2 capitalize">
            <GoArrowLeft /> back to all vans
          </Link>
          <div className="van ">
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-content flexCol gap-7 py-10">
            
            <div className="vanDetials flexCol gap-2">
              <div className="van-price text-xs font-bold uppercase">
                <span className="text-2xl">{van.price}</span>
                $/day
              </div>
              <h1 className="text-2xl uppercase font-bold ">{van.name}</h1>
              <button type="button" className="bg-cyan-950 text-[12px] uppercase text-white py-0 px-6 rounded w-fit">{van.type}</button>
              <p className="font-bold">{van.description}</p>
            </div>
            

            <button type="button" className="bg-yellow-600 w-full py-2 font-bold text-white rounded-sm">Rent this van</button> 
            </div>
         </div> 
          </>) : 
            <h2>Loading ...</h2>
          }
        </div>
      </section>
     </>
   )
 }
 
 export default Van
 