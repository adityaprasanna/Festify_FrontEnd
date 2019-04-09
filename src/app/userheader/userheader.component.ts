import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.sass']
})
export class UserheaderComponent implements OnInit {
  private _opened: boolean = false;
  public _modeNum: number = 2;
  socialData: any;

  public _MODES: Array<string> = ['over', 'push', 'slide'];

  constructor(private authenticationService:AuthenticationService) { }

  get authenticationServiceFn(){
  	return this.authenticationService;
  }
  _toggleSidebar() {
    this._opened = !this._opened;
  }
  ngOnInit() {
    let data = sessionStorage.getItem('userData');
    this.socialData = JSON.parse(data);
    const image = document.getElementById('googleImg');
    image.setAttribute('src', this.socialData.photoUrl);
  }
}