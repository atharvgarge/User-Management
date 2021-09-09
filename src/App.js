//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUserComponent from './components/CreateUserComponent';
import GetAllUser from './components/GetAllUser';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {GetAllUser}></Route>
                          <Route path = "/users" exact component = {GetAllUser}></Route>
                          <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
