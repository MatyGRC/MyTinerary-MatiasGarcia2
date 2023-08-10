import './App.css'
import Home from './Components/Home';
import Stepper from './Components/Stepper';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './Components/Cities';
import Layout from './Components/Layout';

const router = createBrowserRouter([
  {path: '/', element: <Layout />,
    children: [
      {path: '/', element: <Home />}
    ]},
    {path: '/cities', element: <Layout />,
      children: [
        {path: '/cities', element: <Cities />}
      ]}
])

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}