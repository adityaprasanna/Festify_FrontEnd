import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfestComponent } from './editfest.component';

describe('EditfestComponent', () => {
  let component: EditfestComponent;
  let fixture: ComponentFixture<EditfestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
