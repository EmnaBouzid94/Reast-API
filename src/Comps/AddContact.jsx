import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';

class AddContact extends Component {
    state = {
        name:"",
        phone:"",
        email:""
      }
    HandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    AddContact=()=>{
        Axios.post('http://localhost:3012/add_contact',this.state)
    }
    render() { 
        console.log(this.state)
        return ( <div>
            <h1>Add Contact</h1>
            <form>
                <span>Contact Name</span>
                <input type="text" name="name" placeholder="name" onChange={this.HandleChange}></input>
                <span>Contact Phone</span>
                <input type="text" name="phone" placeholder="phone" onChange={this.HandleChange}></input>
                <span>Contact Email</span>
                <input type="text" name="email" placeholder="email" onChange={this.HandleChange}></input>
                <button onClick={this.AddContact}><Link to="/contacts">Add contact</Link></button>
            </form>
            </div>
        );
    }
}
 
export default AddContact;