import React, { Component } from 'react'

function CalendarItems(props){
  var calendar = {
    '9:00:00':[],
    '9:30:00':[],
    '10:00:00':[],
    '10:30:00':[],
    '11:00:00':[],
    '11:30:00':[],
    '12:00:00':[],
    '12:30:00':[],
    '13:00:00':[],
    '13:30:00':[],
    '14:00:00':[],
    '14:30:00':[],
    '15:00:00':[],
    '15:30:00':[],
    '16:00:00':[],
    '16:30:00':[],
    '17:00:00':[],
    '17:30:00':[],
    '18:00:00':[],
    '18:30:00':[],
    '19:00:00':[],
    '19:30:00':[],
    '20:00:00':[],
    '20:30:00':[],
    '21:00:00':[]
  }

  const formatDate = (date)=>{
    return date.split(" ")[1]
  }

  const duration = ( date1, date2 )=>{
    var date1 = new Date(date1)
    var date2 = new Date(date2)
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms/1000;
    difference_ms = difference_ms/60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms/60;
    var hours = Math.floor(difference_ms % 24);

    if(minutes == '30'){
      return hours*2 + 1
    } else {
      return hours*2
    }
  }

  const displayTimeItems = (time)=>{
    return  calendar[time].map((item)=>{
      return(
        <td className='calendar-item-wrapper' rowSpan={`${duration(item.startTime,item.endTime)}`}>
          <div className='item-title'>{item.title}</div>
          <div className='item-location'>{item.location}</div>
        </td>
      )
    })
  }

  props.items.forEach((item)=>{
    var date = formatDate(item.startTime)
    calendar[date].push(item)
  })

  return(
    <div className='calendar-items-wrapper'>
      <tr>
        <td className='calendar-time'>9:00</td>
        {displayTimeItems('9:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>9:30</td>
        {displayTimeItems('9:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>10:00</td>
        {displayTimeItems('10:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>10:30</td>
        {displayTimeItems('10:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>11:00</td>
        {displayTimeItems('11:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>11:30</td>
        {displayTimeItems('11:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>12:00</td>
        {displayTimeItems('12:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>12:30</td>
        {displayTimeItems('12:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>1:00</td>
        {displayTimeItems('13:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>1:30</td>
        {displayTimeItems('13:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>2:00</td>
        {displayTimeItems('14:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>2:30</td>
        {displayTimeItems('14:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>3:00</td>
        {displayTimeItems('15:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>3:30</td>
        {displayTimeItems('15:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>4:00</td>
        {displayTimeItems('16:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>4:30</td>
        {displayTimeItems('16:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>5:00</td>
        {displayTimeItems('17:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>5:30</td>
        {displayTimeItems('17:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>6:00</td>
        {displayTimeItems('18:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>6:30</td>
        {displayTimeItems('18:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>7:00</td>
        {displayTimeItems('19:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>7:30</td>
        {displayTimeItems('19:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>8:00</td>
        {displayTimeItems('20:00:00')}
      </tr>
      <tr className='calendar-time sm'>
        <td>8:30</td>
        {displayTimeItems('20:30:00')}
      </tr>
      <tr className='calendar-time'>
        <td>9:00</td>
        {displayTimeItems('21:00:00')}
      </tr>
  </div>
  )
}

export default CalendarItems
