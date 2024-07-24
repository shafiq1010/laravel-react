import {createBrowserRouter, Navigate} from "react-router-dom";
import signup from "./views/signup";
import login from "./views/login";
import users from "./views/users";
import NotFound from "./views/notfound";
import Login from "./views/login";
import Signup from "./views/signup";
import Users from "./views/users";
import DefualtLayout from "./components/DefualtLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/dashboard";
import UserForm from "./views/UserForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefualtLayout />,
        children:[
            {
                path: '/',
                element: <Navigate to="/users"/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate" />
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children:[
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    
    {
        path: '*',
        element: <NotFound/>
    },
])

export default router;