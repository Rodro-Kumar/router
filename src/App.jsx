import React from "react"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer"
import Nav from "./Component/Nav"
import Home  from "./Component/Home"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route path="/about/:id" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/*" element={<h1 className="text-red-600 text-4xl font-sans font-semibold">Error</h1>}></Route>

    </Route>
  )
)


function App() {
  

  return (
    <RouterProvider
    router={router}
    
  />
  )
}

export default App
