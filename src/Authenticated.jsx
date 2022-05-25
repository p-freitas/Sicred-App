import React from 'react';
import layout from './components/layout';
import routers from './routes/Routes';

const Authenticated = () => {
  if (localStorage.getItem('authenticated') == null) {
    return (
      <layout.BaseLayout>
        <routers.AnonymousRouter />
      </layout.BaseLayout>
    );
  }
  return (
    <layout.BaseLayout>
      <routers.RoutesComponent />
    </layout.BaseLayout>
  );
};

export default Authenticated;
