import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './dashboard';


export default class rootRoutes extends Component {
  render() {
    const { match } = this.props;
    return (
      <main>
        <Header />
        <div id="layoutSidenav">
          <SideBar />
          <Switch>
            <Route exact path={[`${match.path}/home`, `${match.path}`]} component={Dashboard} />
          </Switch>
        </div>
      </main>
    );
  }
}