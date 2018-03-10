import React, {Component} from 'react';
import ShowLikes from './ShowLikes'

class UserPage extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
    this.state = {
      userId: this.props.currentUser.uId,
    }
  }

//*************** Test Function ***********************************
//This function is linked to a button on every page during initial testing to retreive the current state and props

  testing(e){
    e.preventDefault()
    console.log('in Userpage, finding userdata ', this.props, this.state)
  }

//*************** Test Function ***********************************

  displayUserInformation(e) {
    // e.preventDefault()
    let allUserInfo = this.props.allUserData.userData;
    let currentUserId = this.state.userId;
    const result = allUserInfo.find(user => user.profileId === currentUserId)
    console.log(`this is my result for ${this.props.currentUser.uname} ----> `, result)
    if(result){
      console.log(`in result`, result);
      this.setState({
        likes: result.likes
      })
    }
  }

  render(){
    return (
      <div>
        <h1>Made it to the user Page</h1>
        {this.state.likes ? <ShowLikes likes={this.state.likes}/> : <h1>You dont have any likes</h1>}
        <button onClick={(e) => this.displayUserInformation(e)} value="test">Get User Data</button>
        <input onClick={(e) => this.testing(e)} type="submit" value="Test for props and state" />
      </div>
    )
  }
}


export default UserPage;
