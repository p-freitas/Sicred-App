import React from 'react';
import BaseLayout from './components/layout';
import Routes from './routes/Routes';

const Authenticated = () => {
  if (localStorage.getItem('authenticated') == null) {
    return (
      <BaseLayout.AnonymousLayout>
        <Routes.AnonymousRouter />
      </BaseLayout.AnonymousLayout>
    );
  }
  return (
    <BaseLayout.BaseLayout>
      <Routes.RoutesComponent />
    </BaseLayout.BaseLayout>
  );
};

export default Authenticated;
