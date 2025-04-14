import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'

export const myRouter = createBrowserRouter([
{
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'cartPage',
        element: <Cart/>
      }
    ]
}
])