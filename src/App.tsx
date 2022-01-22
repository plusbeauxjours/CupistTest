import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Routes/Main";
import Profile from "./Routes/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
