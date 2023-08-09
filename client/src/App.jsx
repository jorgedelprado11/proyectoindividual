import { Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";

function App() {
  return (
    <Switch>
      <Route path="/create" component={Create} />
      <Route path="/home" component={Home} />
      <Route path="/:id" component={Detail} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
