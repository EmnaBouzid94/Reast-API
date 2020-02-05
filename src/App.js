import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import AddContact from './Comps/AddContact';
import EditContact from './Comps/EditContact';
import ContactList from './Comps/ContactList';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" render={()=>
          <div className="div-button">
            <h1>Contact App</h1>
            <div>
                <button><Link to="/contacts" style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>Contact List</Link></button>
                <button><Link to="/add_contact" style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>Add Contact</Link></button>
            </div>
          </div>
        }/>
        <Route path='/add_contact' component={AddContact}/>
        <Route path='/contacts' component={ContactList}/>
        <Route path='/edit_contact/:id' component={EditContact}/>
        
      </Router>
    </div>
  );
}

export default App;
