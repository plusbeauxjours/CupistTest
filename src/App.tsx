import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigator from "./components/BottomNavigator";
import Header from "./components/Header";
import Main from "./routes/Main";
import Profile from "./routes/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Main />
          <BottomNavigator />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
