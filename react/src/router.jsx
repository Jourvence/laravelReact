import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx"; // Ensure this is imported correctly
import Dashboard from "./views/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,  // DefaultLayout for authenticated routes
        children: [
            {
                path: '/',
                element: <Navigate to="/Users" />
            },
            {
                path: 'dashboard',  // No need to add a leading slash for child paths
                element: <Dashboard />
            },
            {
                path: 'users',
                element: <Users />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,  // GuestLayout for unauthenticated routes
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />  // Catch-all for undefined routes
    }
]);

export default router;
