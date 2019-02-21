import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AftersuccessComponent } from './aftersuccess.component';

describe('AftersuccessComponent', () => {
  let component: AftersuccessComponent;
  let fixture: ComponentFixture<AftersuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AftersuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AftersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
