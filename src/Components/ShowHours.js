import React, { Component } from 'react';

//Try a horizonatal list!!!!

class ShowHours extends Component{
  render() {
    const individualDays = this.props.days.map((day, id) => <li className="hours_list" key={id}>{day}</li>);
    const hours = this.props.hours.map((hour, id) => <li className="hours_list" key={id}>{hour}</li>)
    return(
      <div>
        <ul>
          {individualDays}
        </ul>
        <ul>
          {hours}
        </ul>
      </div>
    )
  }
}

export default ShowHours;
