import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { Applayout } from './pages/_layouts/app'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [{path: '/', element: <Dashboard />}],
    },

    {
        path: '/',
        element: <Applayout />,
        children: [{path: '/sign-in', element: <SignIn />}],
    },
    
])