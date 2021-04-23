import Home from "../pages/home";
import Media from "../pages/media";
import Contacts from "../pages/contacts";
import Photos from "../pages/photos";

export const appRoutes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/photos',
        component: Photos
    },
    {
        path: '/media',
        component: Media
    },
    {
        path: '/contacts',
        component: Contacts
    }
]