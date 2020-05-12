import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

/* 

// GA
const trackingId = "FILL IT SARAH"; 
const history = createBrowserHistory();

ReactGA.initialize(trackingId);
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
}); */

/* ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
}) */

const history = createBrowserHistory();

ReactDOM.render((
<Router history={history}>
    <App />
</Router>
), document.getElementById('root'));

serviceWorker.unregister();