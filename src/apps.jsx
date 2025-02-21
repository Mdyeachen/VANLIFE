import { 
   RouterProvider, 
   createBrowserRouter,
   createRoutesFromElements, 
   Route 
} from "react-router-dom"

import Layout from "./util/layout"
import Home from "./pages/home"
import About from "./pages/about"
import Vans from "./pages/vans"
import Van from "./pages/van"
import HostLayout from "./util/hostLayout"
import Dashboard from "./host/dashboard"
import Income from "./host/income"
import Reviews from "./host/reviews"
import HostVan from "./host/hostVan"
import HostSingleVan from "./host/hostSingleVan"
import HostVanDetials from "./host/hostvanDetials"
import HostVanPrice from "./host/hostvanprice"
import HostVanPhoto from "./host/hostvanphoto"
import MakeServer from "./../server.js";
import NotFoundPage from "./util/notFound.jsx"
import { VansLoader, VanLoader, LoginLoader } from "./util/loader.jsx"
import { LoaderError as Error } from "./util/errorHandle.jsx"
import LoginForm, { ActionFun as LoginAction} from "./util/login.jsx";
import SignForm from "./util/signUp.jsx"
import { authRequired } from "./util/auth.jsx"



const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<Layout />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='vans'>
         <Route 
         index 
         element={<Vans />} 
         errorElement={<Error />}
         loader={VansLoader}
         />
         <Route 
         path=':id' 
         element={<Van />} 
         errorElement={<Error />}
         loader={VanLoader}
         />
      </Route>
      <Route 
      path="login" 
      element={<LoginForm />}
      loader={LoginLoader}
      action={LoginAction}
      />
      <Route path="signin" element={<SignForm />} />


      <Route 
      path='host' 
      element={<HostLayout />} 
      loader={authRequired}
      >
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

   </Route>
))



const Apps = () => {
   // for adding the api
   MakeServer();

   return (
   <>
      <RouterProvider router={router} />
   </>
   )
}

export default Apps;