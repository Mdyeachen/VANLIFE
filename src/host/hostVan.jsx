import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getHostVans } from "../util/api";
import Loading from "../util/loading";
import { ErrorHandle } from "../util/errorHandle";

const HostVan = () => {

   const [ van, setVan ] = useState([]); // state management of van
   const [ loading, setLoading ] = useState(false) // state management of loading effect
   const [ error, setError ] = useState(null) // state management of errror handleing

   useEffect(() => {
      const loadingHostVans = async () => {
         setLoading(true)// loading function runing
         //handle errror
         try{
            const data = await getHostVans();
            setVan(data.vans);
         } catch (err) {
            setError(err)
         } finally{
            setLoading(false)// loading function turn off
         }
      }
      loadingHostVans()
   }, [])

   // all vans element appear by this component
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

   // loading handle
   if(loading) {
      return <Loading />
   }

   // error handle
   if(error) {
   return  ErrorHandle(error)
   }

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