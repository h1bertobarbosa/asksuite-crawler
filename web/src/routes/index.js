import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '~/pages/Home';
import Booking from '~/pages/Booking';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bookings" component={Booking} />
      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
