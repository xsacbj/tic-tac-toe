import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, RouteProps} from 'react-router-dom';

import Begin from './pages/Begin';
import SearchRoom from './pages/SearchRoom';
import Room from './pages/Room';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route  exact path="/" component={Begin} />
            <Route  exact path="/search-room" component={SearchRoom} />
            <Route  exact path="/room" component={Room} />
        </Switch>
    </BrowserRouter>
);

export default Routes;