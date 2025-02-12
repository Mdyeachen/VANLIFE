
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../util/api";

export function Loader() {
  return getVans()
}

function Vans() {
  
  // Loader data working
  const data = useLoaderData();
  const vanDetails = data.vans;


  const [ searchParams, setSearchParams ] = useSearchParams();



  const uniquType = [... new Set(vanDetails.map(van => van.type))]
  const typeParam = searchParams.getAll('type');
  const selectedVans = typeParam.length > 0 ? vanDetails.filter(van => typeParam.includes(van.type)) : vanDetails;


  const handleFillterBtn = (type) => {
    const newType = typeParam.includes(type) ? typeParam.filter(item => item != type) : [...typeParam, type];
    setSearchParams(newType.length ? {type : newType} : {})
  }

  // fillter button appear by this element
  const filterBtn = uniquType.map(type => (
    <button 
      key={type}
      type="button" 
      className={`filterBtn ${typeParam.includes(type) ? "active" : ""}`}
      
      onClick={() => handleFillterBtn(type)}
      >
        {type.toUpperCase()}
      </button>
  ))

  // single van detials by looping
  const vanElement = selectedVans.map(van => (
      <div key={van.id} className="van halfWidth">
        <Link to={`/vans/${van.id}`} state={{search : `?${searchParams.toString()}`, type : typeParam}}>
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

          <section className="vans-header flexCol gap-2 py-5">
          <div className="container">
            <h1 className="text-2xl font-bold">Explore our van options</h1>
          </div>
          <div className="container vans-filters flexRow gap-1">
            
            
            {filterBtn}
            
            {
              searchParams.has("type") ? (
                <button 
                type="button" 
                className="filterBtn clear"
                onClick={() => setSearchParams({})}
                >
                  Clear Filter
                </button>
              ) : null
            }
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

