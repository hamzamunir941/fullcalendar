import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// full calendar //
import { FullCalendarModule } from '@fullcalendar/angular';   // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid';   // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';   // a plugin
import listPlugin from '@fullcalendar/list';  // a plugin
import interactionPlugin from '@fullcalendar/interaction';   // a plugin

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule  // register FullCalendar with you app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
