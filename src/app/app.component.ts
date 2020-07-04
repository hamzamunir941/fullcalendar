import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';  // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';  // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';  // a plugin
import listPlugin from '@fullcalendar/list';  // a plugin
// import interactionPlugin from '@fullcalendar/interaction';   // a plugin

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularfullcalendar';

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth'
  // };

  calendarOptions: CalendarOptions = {
    windowResize: function(arg) {
      alert('The calendar has adjusted to a window resize. Current view: ' + arg.view.type);
    },
    plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
    initialView: 'dayGridMonth',
    navLinks: true,
    headerToolbar: {
      left: 'prevYear,prev,next,nextYear,today',
      center: 'title',
      right: 'listWeek,timeGridDay,timeGridWeek,dayGridMonth'
    },

    editable: true,
    selectable: true,
    weekNumbers: true,
    // businessHours: true,
    // schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',

    dayMaxEventRows: true, // for all non-TimeGrid views
    views: {
      timeGrid: {
        dayMaxEventRows: 5 // adjust to 5 only for timeGridWeek/timeGridDay
      },

      // resourceTimelineFourDays: {
      //   type: 'resourceTimeline',
      //   duration: { days: 4 }
      // }
    },

    businessHours: [ // specify an array instead
      {
        daysOfWeek: [ 1, 2, 3, 4, 5, 6], // Monday, Tuesday, Wednesday
        startTime: '09:00', // 9am
        endTime: '18:00' // 6pm
      }
    ],

    dateClick: this.handleDateClick.bind(this), // bind is important!
    
    timeZone: 'local', // the default (unnecessary to specify)
    events: [
      { title: 'event 1', date: '2020-07-01T14:30:00' },
      { title: 'event 2', date: '2020-07-01T15:30:00' },
      { title: 'event 3', date: '2020-07-01T16:30:00' },
      { title: 'event 4', date: '2020-07-01T17:30:00' },
      { title: 'event 5', date: '2020-07-01T18:30:00' },
      { title: 'event 6', date: '2020-07-01T19:30:00' },
    ]
  };

  handleDateClick(arg) {
    alert('Date Clicked ' + arg.dateStr)
  }
}
