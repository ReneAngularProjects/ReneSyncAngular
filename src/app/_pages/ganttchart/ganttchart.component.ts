import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ToolbarItem, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';

@Component({
  selector: 'app-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GanttchartComponent implements OnInit {

  constructor() { }
  public eventMarkers!: object[];
  public data!: object[];
  public taskSettings!: object;
  public editSettings!: EditSettingsModel;
  public toolbar!: ToolbarItem[];
  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];


    this.data = projectNewData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.eventMarkers = [
      {
        day: new Date('04/09/2019'),
        label: 'Research phase'
      }, {
        day: new Date('04/30/2019'),
        label: 'Design phase'
      }, {
        day: new Date('05/23/2019'),
        label: 'Production phase'
      }, {
        day: new Date('06/20/2019'),
        label: 'Sales and marketing phase'
      }
    ]

  }


}
