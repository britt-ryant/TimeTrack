import React, {Component} from 'react';


class ShowHours2 extends Component{
  render(){
    const individualHours = this.props.hours.map((hour, id) => hour)
    return(
      <td>
        {individualHours}
      </td>
    )
  }
}

export default ShowHours2;
