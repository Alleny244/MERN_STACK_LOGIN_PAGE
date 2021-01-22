
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from'react-router-dom';
import FormPage from "./components/register";
import NavbarPage from "./components/navbar";
import FormPages from './components/login';
import './index.css';

  function App() {
  
  return (
    <Router>
      <div>
      <NavbarPage/>
      <Switch>
     
       
        <Route path="/register"  component={FormPage}/>
    
         <Route path="/login" render={() => <FormPages  />} />
         
         
     
    
 
      </Switch>
    
      </div>
    </Router>
  
  );
}

export default App;
