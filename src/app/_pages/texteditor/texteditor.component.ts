import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class TexteditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
