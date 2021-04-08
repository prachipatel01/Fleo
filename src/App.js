import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route path='/' exact component={Home}/>
          {/* <Route path='/About' exact component={About}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
