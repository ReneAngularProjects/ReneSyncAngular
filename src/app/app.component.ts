import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-syncfusion';
  @ViewChild('dockBar') dockBar!: SidebarComponent;
    public enableDock: boolean = true;
    public width: string = '220px';
    public dockSize: string = '72px';
    toggleClick() {
        this.dockBar.toggle();
    }
}
