import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventUploadFormComponent } from './sevent-upload-form.component';

describe('SeventUploadFormComponent', () => {
  let component: SeventUploadFormComponent;
  let fixture: ComponentFixture<SeventUploadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventUploadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
