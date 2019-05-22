import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunUploadComponent } from './mun-upload.component';

describe('MunUploadComponent', () => {
  let component: MunUploadComponent;
  let fixture: ComponentFixture<MunUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
