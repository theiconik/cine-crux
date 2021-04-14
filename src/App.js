import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
