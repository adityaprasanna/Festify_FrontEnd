import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationheaderComponent } from './organizationheader.component';

describe('OrganizationheaderComponent', () => {
  let component: OrganizationheaderComponent;
  let fixture: ComponentFixture<OrganizationheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
