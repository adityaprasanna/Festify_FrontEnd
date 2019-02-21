import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestspecificComponent } from './festspecific.component';

describe('FestspecificComponent', () => {
  let component: FestspecificComponent;
  let fixture: ComponentFixture<FestspecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestspecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
