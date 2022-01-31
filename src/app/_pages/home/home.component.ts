import { Component, OnInit, ViewEncapsulation, ViewChild, Inject } from '@angular/core';
import { SliderModule, SliderComponent, Placement } from '@syncfusion/ej2-angular-inputs';
import { DropDownTreeComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }

  public cellSpacing: number[] = [10, 10];
  public cellAspectRatio: number = 100 / 50;

  //-- SLIDER
  @ViewChild('slider')
  public defaultObj!: SliderComponent;
  @ViewChild('rangeslider')
  public rangeObj!: SliderComponent;
  @ViewChild('dropdownlist')
  public value: number = 50;
  public min: number = 10;
  public max: number = 90;
  public step: number = 5;
  public rangevalue: Number[] = [30, 50];
  public rangetype: string = 'Range';
  public ticks: Object = {
    placement: 'Before',
    largeStep: 20,
    smallStep: 5,
    showSmallTicks: true
  };
  public rangeticks: Object = {
    placement: 'Before',
    largeStep: 20,
    smallStep: 5,
    showSmallTicks: true
  };
  public datasource: Object[] = [{ value: 'Before', text: 'Before' }, { value: 'After', text: 'After' }, { value: 'Both', text: 'Both' }, { value: 'None', text: 'None' }];
  public fields: Object = { text: 'text', value: 'value' };

  //--- DATERANGE
  public presets = [
    { label: 'Today', start: new Date(), end: new Date() },
    { label: 'This Month', start: new Date(new Date().setDate(1)), end: new Date() }
  ];

  //--- DROPDOWN
  public data: string[] = ['Cricket', 'Football', 'Rugby', 'Snooker', 'Tennis'];

  public socialMediaData: Object[] = [
    { Class: 'facebook', SocialMedia: 'Facebook', Id: 'media1' },
    { Class: 'google-plus', SocialMedia: 'Google Plus', Id: 'media2' },
    { Class: 'instagram', SocialMedia: 'Instagram', Id: 'media3' },
    { Class: 'linkedin', SocialMedia: 'LinkedIn', Id: 'media4' },
    { Class: 'skype', SocialMedia: 'Skype', Id: 'media5' },
    { Class: 'tumblr', SocialMedia: 'Tumblr', Id: 'media6' },
    { Class: 'twitter', SocialMedia: 'Twitter', Id: 'media7' },
    { Class: 'vimeo', SocialMedia: 'Vimeo', Id: 'media8' },
    { Class: 'whatsapp', SocialMedia: 'WhatsApp', Id: 'media9' },
    { Class: 'youtube', SocialMedia: 'YouTube', Id: 'media10' }
  ];
  public iconFields: Object = { text: 'SocialMedia', iconCss: 'Class', value: 'Id' };
  public iconWaterMark: string = 'Select a social media';
  public height: string = '200px';

  public ddTree!: DropDownTreeComponent;
  // define the JSON of data
  public hierarchicalData: Object[] = [
    {
      id: '01', name: 'Local Disk (C:)', expanded: true,
      subChild: [
        {
          id: '01-01', name: 'Program Files',
          subChild: [
            { id: '01-01-01', name: 'Windows NT' },
            { id: '01-01-02', name: 'Windows Mail' },
            { id: '01-01-03', name: 'Windows Photo Viewer' },
          ]
        },
        {
          id: '01-02', name: 'Users', expanded: true,
          subChild: [
            { id: '01-02-01', name: 'Smith' },
            { id: '01-02-02', name: 'Public' },
            { id: '01-02-03', name: 'Admin' },
          ]
        },
        {
          id: '01-03', name: 'Windows',
          subChild: [
            { id: '01-03-01', name: 'Boot' },
            { id: '01-03-02', name: 'FileManager' },
            { id: '01-03-03', name: 'System32' },
          ]
        },
      ]
    },
    {
      id: '02', name: 'Local Disk (D:)',
      subChild: [
        {
          id: '02-01', name: 'Personals',
          subChild: [
            { id: '02-01-01', name: 'My photo.png' },
            { id: '02-01-02', name: 'Rental document.docx' },
            { id: '02-01-03', name: 'Pay slip.pdf' },
          ]
        },
        {
          id: '02-02', name: 'Projects',
          subChild: [
            { id: '02-02-01', name: 'ASP Application' },
            { id: '02-02-02', name: 'TypeScript Application' },
            { id: '02-02-03', name: 'React Application' },
          ]
        },
        {
          id: '02-03', name: 'Office',
          subChild: [
            { id: '02-03-01', name: 'Work details.docx' },
            { id: '02-03-02', name: 'Weekly report.docx' },
            { id: '02-03-03', name: 'Wish list.csv' },
          ]
        },
      ]
    },
    {
      id: '03', name: 'Local Disk (E:)', icon: 'folder',
      subChild: [
        {
          id: '03-01', name: 'Pictures',
          subChild: [
            { id: '03-01-01', name: 'Wind.jpg' },
            { id: '03-01-02', name: 'Stone.jpg' },
            { id: '03-01-03', name: 'Home.jpg' },
          ]
        },
        {
          id: '03-02', name: 'Documents',
          subChild: [
            { id: '03-02-01', name: 'Environment Pollution.docx' },
            { id: '03-02-02', name: 'Global Warming.ppt' },
            { id: '03-02-03', name: 'Social Network.pdf' },
          ]
        },
        {
          id: '03-03', name: 'Study Materials',
          subChild: [
            { id: '03-03-01', name: 'UI-Guide.pdf' },
            { id: '03-03-02', name: 'Tutorials.zip' },
            { id: '03-03-03', name: 'TypeScript.7z' },
          ]
        },
      ]
    }
  ];
  // maps the appropriate column to fields property
  public fields1: Object = { dataSource: this.hierarchicalData, value: 'id', text: 'name', child: 'subChild' };
  //--- DATE PICKER
  public dateValue: Date = new Date();
  public date: Object = new Date()

}
