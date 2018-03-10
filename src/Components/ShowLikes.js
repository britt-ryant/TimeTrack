import React, { Component } from 'react';

class ShowLikes extends Component{
  render() {
    const individualLikes = this.props.likes.map((like, id) => <li key={id}>{like}</li>)
    return(
      <div>
        <ul>
          {individualLikes}
        </ul>
      </div>
    )
  }
}

export default ShowLikes;
