import { NavLink, Outlet } from "react-router-dom";
 
const HostLayout = () => {
   return (
      <>
         <section className="deshboard-nav">
            <div className="container">
               <ul className="dashboardMenu flexRow gap-3">
                  <li>
                     <NavLink 
                     className={({isActive}) => { return isActive ? "text-amber-400" : null}}
                     end
                     to="/host">
                        Dashboard
                     </NavLink>
                  </li>
                  <li>
                     <NavLink 
                     className={({isActive}) => { return isActive ? "text-amber-400" : null}}
                     to="income">
                        Income
                     </NavLink>
                  </li>
                  <li>
                     <NavLink 
                     className={({isActive}) => { return isActive ? "text-amber-400" : null}}
                     to="vans">
                        Vans
                     </NavLink>
                  </li>
                  <li>
                     <NavLink 
                     className={({isActive}) => { return isActive ? "text-amber-400" : null}}
                     to="reviews">
                        Reviews
                     </NavLink>
                  </li>
               </ul>
            </div>
         </section>
      <Outlet />
      </>
   )
}


export default HostLayout;