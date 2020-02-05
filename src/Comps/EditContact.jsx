import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';


class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {      
        name:"",
        phone:"",
        email:"" }
    }
    
    HandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    EditContact=()=>{
        Axios.put('http://localhost:3012/edit_contact/'+this.props.match.params.id,this.state)
    }
    render() { 
        return ( 
            <form>
                <span>Contact Name</span>
                <input type="text" name="name" placeholder="name" onChange={this.HandleChange}></input>
                <span>Contact Phone</span>
                <input type="text" name="phone" placeholder="phone" onChange={this.HandleChange}></input>
                <span>Contact Email</span>
                <input type="text" name="email" placeholder="email" onChange={this.HandleChange}></input>
                <button onClick={this.EditContact}><Link to="/contacts">Add contact</Link></button>
            </form>
        );
    }
}
 
export default EditContact;