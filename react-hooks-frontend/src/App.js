import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AddStudentComponent from './components/AddStudentComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListStudentComponent}></Route>
            <Route path="/students" component={ListStudentComponent}></Route>
            <Route path="/add-student" component={AddStudentComponent}></Route>
            <Route path="/edit-student/:id" component={AddStudentComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
