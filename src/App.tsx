/* eslint-disable import/extensions */
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Login from "./pages/login";
import CreatePlaylistPage from "./pages/createPlaylist";
import store from "./redux/store";
import PrivateRoute from "./routers/privateRoute";
import PageNotFound from "./routers/notFound";

const App = () => {
  return (
    <body>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <PrivateRoute exact path="/create-playlist" component={CreatePlaylistPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    </body>
  );
};

export default App;
