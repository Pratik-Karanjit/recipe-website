import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './Project Components/HomePage'
import ContactPage from './Project Components/ContactPage'

const Project = () => {
  return (
    <div>
    <Routes>
        <Route path = "/" element = {<div><Outlet></Outlet></div>}>
            <Route index element = {<HomePage></HomePage>}></Route>
            <Route path = "contact" element = {<ContactPage></ContactPage>}></Route>
            </Route>
    </Routes>

    </div>
  )
}

export default Project