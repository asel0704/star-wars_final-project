import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import SearchPage from '@containers/SearchPage';
import FavoritesPage from '@containers/FavoritesPage';
import { TestPage } from '../components/TestPage/TestPage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
    {
        path: '/test',
        element: <TestPage />
    },

];

export default routesConfig;
