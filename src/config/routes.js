import AddPage from '../views/AddPage';
import Home from '../views/Home';
import Login from '../views/Login';

const routes = [
  {
    path: '/login',
    exact: true,
    page: Login,
    mainPage: false,
    onlyAuthorized: false,
  },
  {
    path: '/',
    exact: true,
    page: Home,
    mainPage: true,
    onlyAuthorized: true,
  },
  {
    path: '/add',
    exact: true,
    page: AddPage,
    mainPage: true,
    onlyAuthorized: true,
  },
];

export default routes;
