import { useOutletContext } from "react-router-dom";

const HostVanPhoto = () => {
   const { currentVan } = useOutletContext();
    return (
      <>
         <div className="flexRow gap-2 justify-between">
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
            <img className="w-1/2 -mx-1 rounded-lg" src={currentVan.imageUrl} alt={currentVan.name} />
         </div>
      </>
   )
}

export default HostVanPhoto;


