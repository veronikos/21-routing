import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navigation } from "./components/navigation";
import "./App.css";
import { appRoutes } from "./routes/index";

const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/users",
    label: "Users",
  },
  {
    to: "/contacts",
    label: "Contacts",
  },
]

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Navigation links={links}></Navigation>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        {appRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route path="*">
              <p>No Path Found</p>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}