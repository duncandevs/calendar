import React , { Component } from 'react'
import CalendarItems from './CalendarItems'

class Calendar extends Component {
  constructor(){
    super()
    this.state = {
      items: [
          {
            title: 'meeting 01',
            location:'sample location 01',
            startTime:'2017-07-13 9:00:00',
            endTime:'2017-07-13 10:00:00'
          },
          {
            title: 'meeting 02',
            location:'sample location 02',
            startTime:'2017-07-13 9:00:00',
            endTime:'2017-07-13 10:00:00'
          },
          {
            title: 'meeting 03',
            location:'sample location 03',
            startTime:'2017-07-13 10:00:00',
            endTime:'2017-07-13 10:30:00'
          },
          {
            title: 'meeting 04',
            location:'sample location 04',
            startTime:'2017-07-13 12:00:00',
            endTime:'2017-07-13 15:00:00'
          }
        ]
    }
  }

  render(){
    return (
      <div>
        <div className='calendar-wrapper'>
          <table className='calendar-table'>
            <tr>
              <th className='calendar-time-col'></th>
              <th className='calendar-item-col'></th>
            </tr>
            <CalendarItems items={this.state.items}/>
          </table>
        </div>
      </div>
    )
  }
}
export default Calendar
