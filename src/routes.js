import { App } from './pages/App.jsx';
import Favorites  from './pages/Favorites.jsx';
const routes = [
    // {
    //     path: '/',
    //     component: <Home />,
    //     label: 'home'
    // },
    {
        path: '/',
        component: <App />,
        label: 'app'
    },
    {
        path: '/favorites',
        component: <Favorites />,
        label: 'favorites'
    },
];

export default routes;