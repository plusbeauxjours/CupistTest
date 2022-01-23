import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigator from "./components/BottomNavigator";
import MainHeader from "./components/MainHeader";
import ProfileHeader from "./components/ProfileHeader";
import Main from "./routes/Main";
import Profile from "./routes/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <ProfileHeader />
          <Profile />
        </Route>
        <Route path="/">
          <MainHeader />
          <Main />
          <BottomNavigator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
