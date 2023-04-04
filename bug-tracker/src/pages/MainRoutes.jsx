import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
// import { RequiredAuth } from '../hoc/RequiredAuth'
import Login from './Login'
// import Portal from './Portal'

const MainRoutes = () => {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/' element={<div>Welcome to portal</div>} />
      {/* <Route path='/portal' element={
        <RequiredAuth >
          <Portal />
         </RequiredAuth>
      } /> */}
    </Routes>
  )
}

export default MainRoutes