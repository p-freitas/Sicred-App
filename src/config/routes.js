import AddPage from '../views/AddPage';
import AddUserPage from '../views/AddUserPage';
import DetailsPage from '../views/DetailsPage';
import Home from '../views/Home';
import Login from '../views/Login';

const routes = [
  {
    path: '/',
    exact: true,
    page: Login,
    mainPage: false,
    onlyAuthorized: false,
  },
  {
    path: '/AddUser',
    exact: true,
    page: AddUserPage,
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
  {
    path: '/edit/:id',
    exact: true,
    page: AddPage,
    mainPage: true,
    onlyAuthorized: true,
  },
  {
    path: '/details/:id',
    exact: true,
    page: DetailsPage,
    mainPage: true,
    onlyAuthorized: true,
  },
];

export default routes;
