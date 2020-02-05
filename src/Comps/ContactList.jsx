import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
class ContactList extends Component {
    state = { 
        ContactList:[]
     }

    componentDidMount(){
        Axios.get('http://localhost:3012/contacts').then(res=>this.setState({ContactList:res.data})).catch(err=>console.log(err))
    }
    DeleteContact=(id)=>{
        Axios.delete("http://localhost:3012/deleted_contact/"+id).then(res=>this.setState({ContactList:this.state.ContactList.filter(el=>el._id !== id)})).catch(err=>console.log(err))
    }
    componentDidUpdate(PrevProps,PrevState){
        if (PrevState.ContactList.length !== this.state.ContactList.length)
        {
            Axios.get('http://localhost:3012/contacts').then(res=>this.setState({ContactList:res.data})).catch(err=>console.log(err))
        }

    }

    render() {
        
        return ( <div>
            {this.state.ContactList.map(el=><div key={el._id}>
                <p>Contact Name: {el.name}</p>
                <p>Contact Phone: {el.phone}</p>
                <p>Contact Email: {el.email}</p>
                <div>
                <button ><Link to={"/edit_contact/"+el._id}>Edit</Link></button>
                <button onClick={()=>this.DeleteContact(el._id)}>Delete</button>
            </div>
            </div>
                )}
        </div> );
    }
}
 
export default ContactList;