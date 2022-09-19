import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </div>
  );
}

export default App;
