import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Presciption from '../pages/Prescription';

export default function () {
  return (
    <Switch>
      <Route path="/prescription" exact component={Presciption} />
    </Switch>
  );
}
