import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-organizationheader',
  templateUrl: './organizationheader.component.html',
  styleUrls: ['./organizationheader.component.sass']
})
export class OrganizationheaderComponent implements OnInit {

  organizationList: any;

  constructor(private appService: AppService, private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.gettingFestData();
  }
 
  gettingFestData(){
    this.appService.specificOrganizationList().subscribe(data => {
      if (data == undefined) {
        // this.router.navigate(['home']);
      } else {

        this.organizationList = data;
        localStorage.setItem('organization', JSON.stringify(this.organizationList));
      }
    });
  }
}
