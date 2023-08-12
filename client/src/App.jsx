import { Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" ? <Navbar /> : null}
      <Switch>
        <Route path="/create" component={Create} />
        <Route path="/home" component={Home} />
        <Route path="/:id" component={Detail} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
