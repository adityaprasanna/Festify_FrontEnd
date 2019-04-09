import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-organizationheader',
  templateUrl: './organizationheader.component.html',
  styleUrls: ['./organizationheader.component.sass']
})
export class OrganizationheaderComponent implements OnInit {
  public organizationList: null;
  public _opened: boolean = false;
  public _modeNum: number = 2;

  public _MODES: Array<string> = ['over', 'push', 'slide'];

  constructor(private appService: AppService, private authenticationService: AuthenticationService) { }

  get authenticationServiceFn() {
    return this.authenticationService;
  }

  ngOnInit() {
    this.gettingFestData();
  }
  alertBox(){
    if(this._opened) {
      document.body.style.overflow='hidden'
    } else {
      document.body.style.overflow='visible';
    }
  }
  _toggleSidebar() {
    this._opened = !this._opened;
    this.alertBox();
  }
  gettingFestData = () => {
    this.appService.specificOrganizationList().subscribe(data => {
      this.organizationList = data['organization'];
      // localStorage.setItem('organization', JSON.stringify(this.organizationList));
    });
  }
}
