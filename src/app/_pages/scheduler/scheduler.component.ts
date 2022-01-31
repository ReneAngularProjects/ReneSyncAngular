import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: scheduleData,
    fields: {
      subject: { name: 'Subject', validation: { required: true } },
      location: {
        name: 'Location', validation: {
          required: true,
          regex: ["^[a-zA-Z0-9- ]*$", 'Special character(s) not allowed in this field']
        }
      }
    }
  }
}
