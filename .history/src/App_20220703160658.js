import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <routes>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </routes>
        </switch>
      </div>
    </Router>
  );
}

export default App;
