import { Outlet } from "react-router-dom";
import Header from "./header"
import Footer from "./footer"

const Layout = () => {
   return (
      <>
         <Header />
         <div className="min-h-[calc(100vh-180px)] w-full" >
            <Outlet />
         </div>
         <Footer />
      </>
   )
}

export default Layout;