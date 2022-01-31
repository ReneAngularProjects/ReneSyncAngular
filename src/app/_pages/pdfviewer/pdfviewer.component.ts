import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService
} from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css'],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService]
})
export class PdfviewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document = 'PDF_Succinctly.pdf';
}
