import { useOutletContext } from "react-router-dom";

const HostVanDetials = () => {
   const { currentVan } = useOutletContext();
   return (
      <>
         <div className="flexCol gap-3">
            <h4><b>Name :</b> {currentVan.name}</h4>
            <h4><b>Category :</b> {currentVan.type}</h4>
            <h4><b>Description :</b> {currentVan.description}</h4>
            <h4><b>Visibility :</b> Public</h4>
         </div>
      </>
   )
}

export default HostVanDetials;