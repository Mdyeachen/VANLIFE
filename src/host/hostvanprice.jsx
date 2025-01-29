import { useOutletContext } from "react-router-dom";
const HostVanPrice = () => {
   const { currentVan } = useOutletContext();
   return (
      <>
         <h4 className="text-4xl font-black">${currentVan.price}
            <span className="text-xl">/day</span>   
         </h4>
      </>
   )
}

export default HostVanPrice;