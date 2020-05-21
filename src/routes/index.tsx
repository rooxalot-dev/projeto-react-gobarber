import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <PrivateRoute component={Dashboard} />
    </Switch>
  );
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const { user } = useAuth();

  return (
    <Route
      render={() => {
        if (user) {
          return <Component />;
        }

        return <Redirect to="/" />;
      }}
    />
  );
};

export default Routes;
