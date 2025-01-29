import { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go"


const HostSingleVan = () => {
   const param = useParams();
   const [ van, setVan ] = useState(null);

   useEffect(() => {
      fetch(`http://192.168.0.105:3001/api/vans/${param.id}`)
         .then(res => res.json())
         .then(data => setVan(data));
   }, [param.id])



   return (
      <>
         <section>
            {van ? (
               <div className="container">
               <Link to=".." className="flexRow items-center gap-2 py-2 capitalize">
                  <GoArrowLeft /> back to all vans
               </Link>
               <div className="bg-white rounded p-3 my-3">
                  <div className="single-van flexRow">
                     <img className="w-25 rounded" src={van.imageUrl} alt={van.name} /> 
                     <div>
                        <button type="button" className="bg-cyan-950 text-[12px] uppercase text-white py-0 px-6 rounded w-fit">{van.type}</button>
                        <h1 className="text-xl font-black">{van.name}</h1>
                        <div className="van-price text-xs font-bold uppercase">
                           <span className="text-2xl">{van.price}</span>
                           $/day
                        </div>
                     </div>
                  </div>
                  <nav className="host-van-details-nav dashboardMenu flexRow gap-3 my-4 px-3">
                     <li>
                        <NavLink 
                        className={({isActive}) => isActive ? `text-black font-bold` : "text-gray-700"}
                        end
                        to=".">Detials</NavLink>
                     </li>
                     <li>
                        <NavLink 
                        className={({isActive}) => isActive ? `text-black font-bold` : "text-gray-700"}
                        to="price">Price</NavLink>
                     </li>
                     <li>
                        <NavLink 
                        className={({isActive}) => isActive ? `text-black font-bold` : "text-gray-700"}
                        to="photo">Photo</NavLink>
                     </li>
                  </nav>
                  <div className="px-3">
                     <Outlet context={{currentVan : van}}/>  
                  </div>                   
               </div>
            </div>
            ) : <h1>Loading....</h1> }
         </section>
      </>
   )
}


export default HostSingleVan;