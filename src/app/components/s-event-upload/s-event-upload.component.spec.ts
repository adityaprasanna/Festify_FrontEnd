import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEventUploadComponent } from './s-event-upload.component';

describe('SEventUploadComponent', () => {
  let component: SEventUploadComponent;
  let fixture: ComponentFixture<SEventUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEventUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEventUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
