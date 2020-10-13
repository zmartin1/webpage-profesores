import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import events from '../assets/events';
import interactionPlugin from "@fullcalendar/interaction";
import data from '../assets/teacher.json'
import timeGridPlugin from '@fullcalendar/timegrid'
import { INITIAL_EVENTS, createEventId } from './event-utils'

var value = "Elija materia"
            
export default class MyCalendar extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <Jumbotron fluid>
        <Container fluid>
          {this.renderSidebar()} 
          
          <div className='demo-app-main'>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              initialView='timeGridWeek'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={this.state.weekendsVisible}
              initialEvents={ INITIAL_EVENTS } // alternatively, use the `events` setting to fetch from a feed
              select={this.handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={this.handleEventClick}
              eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
              /* you can update a remote database when these fire:
              eventAdd={function(){}}
              eventChange={function(){}}
              eventRemove={function(){}}
              */
            />
          </div>
        </Container>
      </Jumbotron>
    )
  }

 renderSidebar() {

  
     return (
       <div>
      <DropdownButton id="dropdown-basic-button" title={value} onSelect={this.handleSelect1}>
        {data.subjects.map((subject) => (
            <Dropdown.Item eventKey={subject.materia}> {subject.materia}</Dropdown.Item>
        ))}
      </DropdownButton>
      </div>
     )
//       <div className='demo-app-sidebar'>
//         <div className='demo-app-sidebar-section'>
//           <label>
//             <input
//               type='checkbox'
//               checked={this.state.weekendsVisible}
//               onChange={this.handleWeekendsToggle}
//             ></input>
//              toggle weekends
//           </label>
//         </div>
//         <div className='demo-app-sidebar-section'>
//           <h2>All Events ({this.state.currentEvents.length})</h2>
//           <ul>
//             {this.state.currentEvents.map(renderSidebarEvent)}
//           </ul>
//         </div>
//       </div>
//     )
     }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}

































// import React from 'react';
// import { Calendar, momentLocalizer, Views  } from 'react-big-calendar'
// import events from '../assets/events';
// import moment from 'moment';
// import data from '../assets/teacher.json'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'

// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment)
// var value = "Elija materia"

// export default class MyCalendar extends React.Component {
    
//     constructor(props) {
//         super(props)
    
//         this.state = { events, value }
//         this.props = props
//     }


//     handleSelect = ({ start, end }) => {
//         if(this.state.value === "Elija materia"){
//             alert("Subject not chosen")
//         } else {
//         const subject = this.state.value
//         const teacherUser = this.props.teacher
//         const string = "Clase de "+ subject + " con "+teacherUser
//         alert(string)
//         if (string)
//           this.setState({
//             events: [
//               ...this.state.events,
//               {
//                 start,
//                 end,
//                 string,
//               },
//             ],
//             ...this.state.value
//           })
//         }
//     }

//     handleSelect1=(e)=>{
//         console.log(e);
//         this.setState({
//             ...this.state.events,
//             value: e
//         }
//         )
//       }

//     render(){
//         return(
//             <div>
//                 <DropdownButton id="dropdown-basic-button" title={this.state.value} onSelect={this.handleSelect1}>
//                     {data.subjects.map((subject) => (
//                         <Dropdown.Item eventKey={subject.materia}> {subject.materia}</Dropdown.Item>
//                     ))}
//                 </DropdownButton>
//                 <Calendar
//                     selectable
//                     localizer={localizer}
//                     events={events}
//                     startAccessor="start"
//                     endAccessor="end"
//                     style={{ height: 500 }}
//                     timeslots={8}
//                     defaultView={Views.WEEK}
//                     onSelectEvent={event => alert(event.title)}
//                     onSelectSlot={this.handleSelect}
//                 />
//             </div>
//         )
//     }
// }
