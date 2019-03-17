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

  constructor(private appService: AppService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.gettingFestData();
  }
  gettingFestData = () => {
    this.appService.specificOrganizationList().subscribe(data => {
      this.organizationList = data['organization'];
      // localStorage.setItem('organization', JSON.stringify(this.organizationList));
    });
  }
}
