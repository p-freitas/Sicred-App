import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../config/routes';

const RoutesComponent = () => {
  const authenticatedRoutes = routes.filter
    ? routes.filter((r) => r.onlyAuthorized)
    : [];

  return (
    <Routes>
      {authenticatedRoutes.map(
        (route, index) =>
          route.path && (
            <Route

              key={index}
              path={route.path}
              element={<route.page />}
            />
          ),
      )}
      <Route
        path="/"
        element={<Route path={routes.find((r) => r.mainPage)?.path || ''} />}
      />
      <Route path="/not-found" />
    </Routes>
  );
};

const AnonymousRouter = () => {
  const anonymousRoutes = routes.filter
    ? routes.filter((r) => !r.onlyAuthorized)
    : [];
  return (
    <Routes>
      {anonymousRoutes.map(
        (route, index) =>
          route.path && (
            <Route
              key={index}
              path="/"
              element={<route.page />}
            />
          ),
      )}
      <Route path="/not-found" />
    </Routes>
  );
};

const routers = {
  RoutesComponent,
  AnonymousRouter,
}

export default routers;
