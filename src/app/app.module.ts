import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxModule, SliderModule } from '@syncfusion/ej2-angular-inputs';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ToolbarService, EditService, SelectionService, DayMarkersService } from '@syncfusion/ej2-angular-gantt';
import { ScheduleModule, View } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
   NavigationService, TextSearchService, TextSelectionService, PrintService } from '@syncfusion/ej2-angular-pdfviewer';
import { RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';
import { StockChartModule } from '@syncfusion/ej2-angular-charts';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { ColumnSeriesService, StackingColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';




import { HomeComponent } from './_pages/home/home.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { PdfviewerComponent } from './_pages/pdfviewer/pdfviewer.component';
import { DatagridComponent } from './_pages/datagrid/datagrid.component';
import { SchedulerComponent } from './_pages/scheduler/scheduler.component';
import { GanttchartComponent } from './_pages/ganttchart/ganttchart.component';
import { TexteditorComponent } from './_pages/texteditor/texteditor.component';
import { KanbanchartComponent } from './_pages/kanbanchart/kanbanchart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PdfviewerComponent,
    DatagridComponent,
    SchedulerComponent,
    GanttchartComponent,
    TexteditorComponent,
    KanbanchartComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    RichTextEditorModule,
    KanbanModule,
    DashboardLayoutModule,
    ChartModule,
    TabModule,
    AccordionModule,
    NumericTextBoxModule,
    SliderModule,
    ComboBoxModule,
    DropDownTreeModule,
    DatePickerModule,
    DateRangePickerModule,
    DateTimePickerModule,
    GanttModule, 
    ScheduleModule,
    ButtonModule,
    PdfViewerModule,
    RangeNavigatorModule,
    StockChartModule,
    ChartAllModule, 
    StockChartAllModule,
    GridModule,
    NgbModule
  ],
  
  providers: [
    CategoryService, 
    LineSeriesService, 
    ToolbarService, 
    EditService, 
    SelectionService, 
    DayMarkersService,
    WeekService, 
    MonthService,
    DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService, 
    AgendaService, 
    MonthAgendaService,
    LinkAnnotationService, 
    BookmarkViewService, 
    MagnificationService, 
    ThumbnailViewService,
    NavigationService, 
    TextSearchService, 
    TextSelectionService, 
    PrintService,
    ColumnSeriesService,
    StackingColumnSeriesService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
