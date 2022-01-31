import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanchartComponent } from './kanbanchart.component';

describe('KanbanchartComponent', () => {
  let component: KanbanchartComponent;
  let fixture: ComponentFixture<KanbanchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
