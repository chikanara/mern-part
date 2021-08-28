
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
      <Route path="/" component={Home} exact/>
      <Route path="/profile" component={Profile} exact/>
      <Route path="/login" component={Login} exact/>
      
      <Route path="/register" component={Register} exact/>
     </Router>
    </div>
  );
}

export default App;
