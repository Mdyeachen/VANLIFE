import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa";

const Header = () => {
   const navigate = useNavigate(); // Call useNavigate at the top level

   const fakeLogOut = async () => {
      localStorage.removeItem("login"); // Remove login info
      navigate("/login"); // Navigate to the login page
   }

   console.log(JSON.parse(localStorage.getItem("login")))
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
               to="/login"
               aria-label="login"
               >
                  <FaRegUserCircle />
               </NavLink>
            </li>
            <li>
               <button 
               onClick={fakeLogOut}
               className="flex items-center"
               aria-label="log out"
               >
                  <FaUserSlash />
               </button>
            </li>
         </ul>
      </div>
   </section>
   )
}

export default Header;