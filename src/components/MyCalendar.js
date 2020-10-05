import React from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import events from '../assets/events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)


export default class MyCalendar extends React.Component {
    render(){
        return(
            <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
            </div>
        )
    }
}
