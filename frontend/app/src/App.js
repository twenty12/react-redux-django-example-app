import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/create-user">
            <CreateUser />
          </Route>
          <Route path="/update-user/:id">
            <UpdateUser />
          </Route>
          <Route path="/accounts">
            <Accounts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function CreateUser() {
  return (
    <div>
      <h2>Create user here</h2>
    </div>
  );
}

function UpdateUser() {
  let { id } = useParams();
  return (
    <div>
      <h2>Update user here {id}</h2>
    </div>
  );
}

function Accounts() {
  return (
    <div>
      <h2>Accounts page here </h2>
    </div>
  );
}
