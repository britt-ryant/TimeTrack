import React, {Component} from 'react';

class UserPage extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
    this.state = {
      userId: this.props.currentUser.uId
    }
  }
  displayUserInformation(e) {
    e.preventDefault()
    let allUserInfo = this.props.allUserData.userData;
    let currentUserId = this.state.userId;
    const result = allUserInfo.find(user => user.profileId === currentUserId)
    console.log(`this is my result for ${this.props.currentUser.uname} ----> `, result)
    // allUserInfo.find(function(user){
    //   console.log('Im here', user, currentUserId)
    //   if(user.profileId === currentUserId)
    // })
  }

  render(){
    return (
      <div>
        <h1>Made it to the user Page</h1>
        <button onClick={(e) => this.displayUserInformation(e)} value="test" />
      </div>
    )
  }
}


export default UserPage;
