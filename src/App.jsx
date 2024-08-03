
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Registion from './pages/Registion'

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/registion' element={<Registion/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={shanto}/>
     
    </>
  )
}

export default App
