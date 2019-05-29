import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunUploadFormComponent } from './mun-upload-form.component';

describe('MunUploadFormComponent', () => {
  let component: MunUploadFormComponent;
  let fixture: ComponentFixture<MunUploadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunUploadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
