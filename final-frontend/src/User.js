import React, { Component } from 'react';
import { connect } from 'react-redux'; 


class User extends Component {
constructor(props){
    super(props);
    this.state={
        person:props.person
    }
}
render(){
    return(
    <div>
        <h3>User</h3>
        {this.state.person.username}
    </div>
    )
}

}


const ConnectUser = connect((state)=>{
    return {
        person:state.login.person
    }
})(User);

export default ConnectUser;



