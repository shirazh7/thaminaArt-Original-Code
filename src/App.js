import './App.css';

import { HomePage } from "./containers/HomePage";
import { AboutPage } from "./containers/AboutPage";
import { ContactPage } from "./containers/ContactPage";
import { HashRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import { PortfolioPage } from './containers/PortfolioPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/thaminaArt/" exact component={HomePage} />
            <Route path="/portfolio/" exact component={PortfolioPage} />
            <Route path="/contact/" exact component={ContactPage} />
            <Route path="/about" exact component={AboutPage} />
          </Switch>
        </Router>
      </div>
    </HashRouter>
  );
}

export default App;
