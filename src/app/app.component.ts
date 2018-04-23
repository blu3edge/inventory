import { Component, DoCheck, OnInit } from '@angular/core';
import { GLOBAL } from './services/global';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title:string;
  public header_color: string;
  public identity;

  constructor(
    private _userService: UserService,	private _route: ActivatedRoute,
  		private _router: Router,
  ){
  	this.header_color = GLOBAL.header_color;
    this.title = 'Inventory';
  }
  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }
  //comprueba constantemente los datos del localStorage
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }
  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
