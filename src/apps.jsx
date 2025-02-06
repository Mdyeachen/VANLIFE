import { 
   RouterProvider, 
   createBrowserRouter, 
   createRoutesFromElements, 
   Route 
} from "react-router-dom"

import Layout from "./util/layout"
import Home from "./pages/home"
import About from "./pages/about"
import Vans, {Loader as vanPageLoader}  from "./pages/vans"
import Van from "./pages/van"
import NotFound from "./pages/notFound"
import {ErrorHandler} from "./util/error"
import HostLayout from "./util/hostLayout"
import Dashboard from "./host/dashboard"
import Income from "./host/income"
import Reviews from "./host/reviews"
import HostVan from "./host/hostVan"
import HostSingleVan from "./host/hostSingleVan"
import HostVanDetials from "./host/hostvanDetials"
import HostVanPrice from "./host/hostvanprice"
import HostVanPhoto from "./host/hostvanphoto"
import makeServer from "./../server"
import Login from "./pages/login"

const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<Layout />}>
      <Route path="*" element={<NotFound />} />
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='vans'>
         <Route 
         index 
         element={<Vans />} 
         errorElement={<ErrorHandler />}
         loader={vanPageLoader}
         />
         <Route path=':id' element={<Van />} />
      </Route>

      <Route path='host' element={<HostLayout />} >
         <Route index element={<Dashboard />} /> 
         <Route path='income' element={<Income />} />
         <Route path='reviews' element={<Reviews />} />
         <Route path='vans' >
            <Route index element={<HostVan />} />
            <Route path=":id" element={<HostSingleVan />}>
               <Route index element={<HostVanDetials />}/>
               <Route path="price" element={<HostVanPrice />}/>
               <Route path="photo" element={<HostVanPhoto />}/>
            </Route>
         </Route>
      </Route>

      <Route path="login" element={<Login/>} />
   </Route>
))



const Apps = () => {

   // for adding the api
   makeServer();

   return (

   <>
      <RouterProvider router={router} />
   </>
   )
}

export default Apps;