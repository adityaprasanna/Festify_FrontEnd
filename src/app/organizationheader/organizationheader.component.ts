import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-organizationheader',
  templateUrl: './organizationheader.component.html',
  styleUrls: ['./organizationheader.component.sass']
})
export class OrganizationheaderComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }
 

}
