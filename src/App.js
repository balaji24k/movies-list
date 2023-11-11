import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import Movies from "./components/Authentication/Movies";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Signup />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
    </Switch>
  );
}

export default App;
