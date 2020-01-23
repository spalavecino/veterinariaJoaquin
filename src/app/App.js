import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "../login";
import Layout from "../components/layout";
import Dashboard from "../dashboard";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
