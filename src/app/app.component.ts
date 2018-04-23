import { Component, DoCheck, OnInit } from '@angular/core';
import { GLOBAL } from './services/global';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  public title:string;
  public header_color: string;
  public identity;

  constructor(
    private _userService: UserService
  ){
  	this.header_color = GLOBAL.header_color;
    this.title = 'Inventory';
  }
  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }
}
