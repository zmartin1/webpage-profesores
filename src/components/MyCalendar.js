import React from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer, Views  } from 'react-big-calendar'
import events from '../assets/events';
import moment from 'moment';
import data from '../assets/teacher.json'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
var value = "Elija materia"

export default class MyCalendar extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = { events, value }
        this.props = props
    }


    handleSelect = ({ start, end }) => {
        if(this.state.value === "Elija materia"){
            alert("Subject not chosen")
        } else {
        const subject = this.state.value
        const teacherUser = this.props.teacher
        const string = "Clase de "+ subject + " con "+teacherUser
        alert(string)
        if (string)
          this.setState({
            events: [
              ...this.state.events,
              {
                start,
                end,
                string,
              },
            ],
            ...this.state.value
          })
        }
    }

    handleSelect1=(e)=>{
        console.log(e);
        this.setState({
            ...this.state.events,
            value: e
        }
        )
      }

    render(){
        return(
            <div>
                <DropdownButton id="dropdown-basic-button" title={this.state.value} onSelect={this.handleSelect1}>
                    {data.subjects.map((subject) => (
                        <Dropdown.Item eventKey={subject.materia}> {subject.materia}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <Calendar
                    selectable
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    timeslots={8}
                    defaultView={Views.WEEK}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={this.handleSelect}
                />
            </div>
        )
    }
}
