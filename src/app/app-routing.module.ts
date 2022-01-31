import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { DatagridComponent } from './_pages/datagrid/datagrid.component';
import { GanttchartComponent } from './_pages/ganttchart/ganttchart.component';
import { HomeComponent } from './_pages/home/home.component';
import { KanbanchartComponent } from './_pages/kanbanchart/kanbanchart.component';
import { PdfviewerComponent } from './_pages/pdfviewer/pdfviewer.component';
import { SchedulerComponent } from './_pages/scheduler/scheduler.component';
import { TexteditorComponent } from './_pages/texteditor/texteditor.component';

const routes: Routes = [
  {
    component:HomeComponent, path:''
  },
  {
    component:DashboardComponent , path:'dashboard'
  },
  {
    component:PdfviewerComponent, path:'pdfviewer'
  },
  {
    component:DatagridComponent, path:'datagrid'
  },
  {
    component:SchedulerComponent, path:'scheduler'
  },
  {
    component:GanttchartComponent, path:'ganttchart'
  },
  {
    component:KanbanchartComponent, path:'kanban'
  },
  {
    component:TexteditorComponent, path:'texteditor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
