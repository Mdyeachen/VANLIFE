import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
   return (
   <section className="py-8">
      <div className="container flex flex-wrap justify-between">
         <div className="logo uppercase font-bold text-lg">
         <Link to="/">
            <h1>#VANLIFE</h1>
         </Link>
         </div>

         <ul className="mainNav flex items-center gap-3">
            <li>
               <NavLink 
               className={({isActive})=> isActive ? "text-cyan-950" : null}
               to="/host">Host</NavLink>
            </li>
            <li>
               <NavLink 
               className={({isActive})=> isActive ? "text-cyan-950" : null}
               to="/about">About</NavLink> 
            </li>
            <li>
               <NavLink 
               className={({isActive})=> isActive ? "text-cyan-950" : null}
               to="/vans">Van</NavLink> 
            </li>
            <li>
               <NavLink 
               className={({isActive})=> isActive ? "text-cyan-950" : null}
               to="login"><FaRegUserCircle /></NavLink> 
            </li>
         </ul>
      </div>
   </section>
   )
}

export default Header;