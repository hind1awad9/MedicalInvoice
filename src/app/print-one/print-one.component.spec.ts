import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOneComponent } from './print-one.component';

describe('PrintOneComponent', () => {
  let component: PrintOneComponent;
  let fixture: ComponentFixture<PrintOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
