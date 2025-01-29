import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVan = () => {

   const [ van, setVan ] = useState([]);

   useEffect(() => {
      fetch("http://192.168.0.105:3001/api/vans")
            .then(res => res.json())
            .then(data => setVan(data))
   }, [])

   const vanElement = van.map(item => (
      <div key={item.id}>
         <Link className="single-van flexRow py-3" to={`/host/vans/${item.id}`}>
            <img className="w-14 rounded" src={item.imageUrl} alt="" />
            <div className="vanContent">
               <h2 className="text-lg font-black">{item.name}</h2>
               <p ><span>{item.price}</span>$/day</p>
            </div>
         </Link>
      </div>
   ))


   return (
      <>
      <section className="vanlist">
         <div className="container">
            <h1 className="text-2xl font-black capitalize">Your Listed vans</h1>
         </div>

         <div className="container">
            {vanElement}
         </div>
      </section>
      </>
   )
}


export default HostVan;