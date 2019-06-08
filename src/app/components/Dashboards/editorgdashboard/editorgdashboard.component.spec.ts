import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorgdashboardComponent } from './editorgdashboard.component';

describe('EditorgdashboardComponent', () => {
  let component: EditorgdashboardComponent;
  let fixture: ComponentFixture<EditorgdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorgdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorgdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
