import Home from "../pages/home";
import Users from "../pages/users";
import About from "../pages/about";
import Contacts from "../pages/contacts";

export const appRoutes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/contacts',
        component: Contacts
    }
]