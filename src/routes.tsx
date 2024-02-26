import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { Applayout } from './pages/_layouts/app'
import { SignUp } from './pages/auth/sign-up'
import { Orders } from './pages/app/orders/orders'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [{path: '/', element: <Dashboard />}],
    },
    {
        path: '/orders',
        element: <Orders />,
      },

    {
        path: '/',
        element: <Applayout />,
        children: [
            {path: '/sign-in', element: <SignIn />},
            {path: '/sign-up', element: <SignUp />}
        ],
    },
    
])