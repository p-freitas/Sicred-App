import Home from '../views/Home';
import Login from '../views/Login';

const routes = [
    {
      path: '/',
      exact: true,
      page: Home,
      mainPage: true,
      onlyAuthorized: true,
    },
    {
      path: '/login',
      exact: true,
      page: Login,
      mainPage: false,
      onlyAuthorized: false,
    },
  ];
  
  export default routes;
  