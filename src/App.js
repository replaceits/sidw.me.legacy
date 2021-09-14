import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import About from './components/pages/About';

import './App.scss';
import Sidebar from './components/Sidebar';
import Code from './components/pages/Code';
import Music from './components/pages/Music';
import Art from './components/pages/Art';
import Poetry from './components/pages/Poetry';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/code' component={Code} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/art' component={Art} />
          <Route exact path='/poetry' component={Poetry} />
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
