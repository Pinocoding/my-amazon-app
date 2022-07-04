import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <switch></switch>
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
