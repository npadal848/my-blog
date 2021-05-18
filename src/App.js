import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import AricleListPage from './pages/AricleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './common/NavBar';
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    
      <Router>
        <div className="App">
          <NavBar />
          <div className="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={About} />
              <Route path="/articles" component={AricleListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
  );
}
export default App;
