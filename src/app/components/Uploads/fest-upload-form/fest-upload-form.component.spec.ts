import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestUploadFormComponent } from './fest-upload-form.component';

describe('FestUploadFormComponent', () => {
  let component: FestUploadFormComponent;
  let fixture: ComponentFixture<FestUploadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestUploadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
