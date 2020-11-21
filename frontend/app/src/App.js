import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyWrapper from "./myComponent.js";
import { CreateUser } from "./features/user/createUser";
import { UpdateUser } from "./features/user/updateUser";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/create-user">
          <CreateUser />
        </Route>
        <Route exact path="/update-user">
          <UpdateUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
