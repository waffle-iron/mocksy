import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import FeedPage from './components/feed/FeedPage';
import FeedbackPage from './components/feedback/FeedbackPage';
import ProfilePage from './components/profile/ProfilePage';
import Login from './components/login/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => (<FeedPage />)} />
          <Route exact path="/project/:id" render={() => (<FeedbackPage />)} />
          <Route exact path="/user/:name" render={() => (<ProfilePage />)} />
          <Route exact path="/login" render={() => (<Login />)} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('app')
);
