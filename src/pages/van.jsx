import { Link, useLocation, useLoaderData } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go"


function Van() {
  const loaderData = useLoaderData();
  const van = loaderData?.van || [] //van Data

  // location for go back previous page accroding to filter
  const location = useLocation();
  const backUrl = location.state ? 
      `..?${location.state.search}` : 
      "..";


   return (
     <>
      <section className="vans-header">
        <div className="container">

          <Link to={backUrl} className="flexRow items-center gap-2 py-2 capitalize">
            <GoArrowLeft /> back to previous page
          </Link>
          <div className="van ">
            <img src={van?.imageUrl || ""} alt={van?.name || ""} />
            <div className="van-content flexCol gap-7 py-10">
            
            <div className="vanDetails flexCol gap-2">
              <div className="van-price text-xs font-bold uppercase">
                <span className="text-2xl">{van?.price || ""}</span>
                $/day
              </div>
              <h1 className="text-2xl uppercase font-bold ">{van?.name || ""}</h1>
              <button type="button" className="bg-cyan-950 text-[12px] uppercase text-white py-0 px-6 rounded w-fit">{van?.type || ""}</button>
              <p className="font-bold">{van?.description}</p>
            </div>
            

            <button type="button" className="bg-yellow-600 w-full py-2 font-bold text-white rounded-sm">Rent this van</button> 
            </div>
         </div> 

        </div>
      </section>
     </>
   )
 }
 
 export default Van
 