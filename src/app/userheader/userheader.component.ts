import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.sass']
})
export class UserheaderComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  get authenticationServiceFn(){
  	return this.authenticationService;
  }

  ngOnInit() {
  }

}
