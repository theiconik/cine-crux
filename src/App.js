import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Routes/Create";
import BlogDetails from "./Routes/BlogDetails";
import NotFound from "./Routes/NotFound";

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
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
             <Route path="*">
              <NotFound />
            </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
