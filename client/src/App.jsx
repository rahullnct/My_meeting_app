import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Sessions from './pages/Sessions'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Protected_route from './components/Protected_route'
import Protected_layout from './components/Protected_layout'
import Meeting_room from './pages/Meeting_room'

const App = () => {
  return (
  <Routes>
  <Route path='/login' element={<Login mode="login" />} />
  <Route path='/register' element={<Login mode="register" />} />

  <Route element={<Protected_route />}>
  <Route element={<Protected_layout />}>
    <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='/sessions' element={<Sessions/>} />
    <Route path='/pricing' element={<Pricing/>} />
  </Route>
   <Route path='/meeting/:meeting_id' element={<Meeting_room/>} />
 </Route >
   <Route path='*' element={< Navigate to='/dashboard' replace />}/>
  </Routes>
  )
}

export default App
