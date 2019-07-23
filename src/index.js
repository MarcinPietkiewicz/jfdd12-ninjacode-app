import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import BottomAppBar from "./BottomAppBar";
import * as serviceWorker from "./serviceWorker";
import { HistoryTable } from "./components/HistoryTable/HistoryTable";
import { Dashboard } from "./components/Dashboard";
import { Charts } from "./components/Charts";
import { BalanceProvider, BalanceConsumer } from "./contexts/BalanceContext";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import firebaseApp from "./firebase";
import firebase from "firebase";

const NoMatch = () => <h1>404</h1>;

class Root extends React.Component {
  render() {
    return (
      <BalanceProvider>
        <BalanceConsumer>
          {value => (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" render={() => <Dashboard />} />
                <Route path="/History" render={() => <HistoryTable />} />
                <Route path="/Charts" render={() => <Charts />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/sign-up" render={() => <SignUp />} />

                <Route component={NoMatch} />
              </Switch>
              <BottomAppBar onFormInput={value.onFormInput} />
            </BrowserRouter>
          )}
        </BalanceConsumer>
      </BalanceProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
