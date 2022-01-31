import { Component, OnInit } from '@angular/core';
import { CardSettingsModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-kanbanchart',
  templateUrl: './kanbanchart.component.html',
  styleUrls: ['./kanbanchart.component.css']
})
export class KanbanchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public data: Object[] = kanbanData;
  public cardSettings: CardSettingsModel = {
      contentField: 'Summary',
      headerField: 'Id'
  };
  public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };

}
