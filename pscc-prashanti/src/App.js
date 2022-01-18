import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Features from './components/Features.js'
import Pricing from './components/Pricing.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
