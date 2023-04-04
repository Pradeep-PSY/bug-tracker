import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import BugPage from './BugPage'
import { RequiredAuth } from '../hoc/RequiredAuth'


const MainRoutes = () => {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/' element={<div>Welcome to BugReport pannel</div>} />
      <Route path='/bugreport' element={
        <RequiredAuth >
          <BugPage />
         </RequiredAuth>
      } />
    </Routes>
  )
}

export default MainRoutes