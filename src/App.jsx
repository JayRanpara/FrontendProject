import './App.css'
import { AboutGita } from './Pages/AboutGita'
import { Home } from './Pages/Home'
import { Quotes } from './Pages/Quotes'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from './Component/Layout'
import { Chapters } from './Pages/Chapters'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutGita />
      },
      {
        path:"/chapter/:id",
        element:<Chapters/>
      },
      {
        path: "/quotes",
        element: <Quotes />
      }
    ]
  },

])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
