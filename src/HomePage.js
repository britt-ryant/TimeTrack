import React, { Component } from 'react';
import UserPage from './Components/UserPage'
// import logo from './logo.svg';
// import './App.css';

class Hompage extends Component {
  constructor(props){
    super(props);
    this.state = {
      uname: '',
      pword: '',
      loggedIn: false
    }
  }

  //*************** Test Function ***********************************
  //This function is linked to a button on every page during initial testing to retreive the current state and props

  testing(e){
    e.preventDefault()
    console.log('in homepage, finding userdata ', this.props, this.state)
  }

  //*************** Test Function ***********************************

  addUname(e) {
    this.setState({
       uname: e.target.value,
    })
  }
  addPword(e) {
    this.setState({
       pword: e.target.value,
    })
  }

  findUser(e) {
    e.preventDefault();
    let data = this.props.userData.users;
    let currentUser = this.state;
    let loggedIn = {
      status: false,
      userId: 0
    }
    data.find(function(data){
       if(data.uname === currentUser.uname && data.pword === currentUser.pword) {
         loggedIn.status = true;
         loggedIn.userId = data.id;
         return currentUser;
      }
    })
    this.setState({
      loggedIn: loggedIn.status,
      uId: loggedIn.userId
    })
    return loggedIn
  }

  render() {
    return (
        <div>
          {!this.state.loggedIn ?
            <form>
                <h1>Log In to your account</h1>
                <input type="text" name="uname" onChange={(e) => this.addUname(e)}/>
                <input type="text" name="pword" onChange={(e) => this.addPword(e)}/>
                <input onClick={(e) => this.findUser(e)} type="submit" value="submit" />
                <input onClick={(e) => this.testing(e)} type="submit" value="Test for props and state" />
            </form> : <UserPage currentUser={this.state} allUserData={this.props.userSpecificData}/>}
        </div>
    );
  }
}

export default Hompage;
