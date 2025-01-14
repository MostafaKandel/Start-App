import Header from './Components/Header'
import Portfolio  from './Components/Portfolio'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import Layout from './Components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let router = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {path:'',element:<Header/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
  ]},
])

function App() {
  return <RouterProvider router={router} />
}

export default App
