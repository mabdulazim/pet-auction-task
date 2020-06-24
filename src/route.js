import React, {Suspense} from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

const MainLayout   = React.lazy(() => import('./components/Layout/MainLayout'));
const Home         = React.lazy(() => import('./pages/home'));
const PetDetails   = React.lazy(() => import('./pages/pet-details'));
const OwnerDetails = React.lazy(() => import('./pages/owner-details'));

const AppRoute = ({ title, layout: Layout, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout title={title}>
      <Component {...props} />
    </Layout>
  )} />
);

export default () => 
{
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AppRoute 
            exact 
            path="/" 
            component={Home} 
            layout={MainLayout}
            title="Explore All Pets"
            padding={10}
          />
          <AppRoute 
            exact 
            path="/pets/:id" 
            component={PetDetails} 
            layout={MainLayout}
            title="Final Result"
            padding={0}
          />
          <AppRoute 
            exact 
            path="/owners/:id" 
            component={OwnerDetails} 
            layout={MainLayout}
            title="Owned Pets"
            padding={10}
          />
          <Redirect to={`/`} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}