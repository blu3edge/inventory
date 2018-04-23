import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../models/user';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';


@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	providers: [UserService]

})
export class RegisterComponent implements OnInit{

	public user: User;
	public status: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _user_Service: UserService
	)
	{

		this.user = new User('','','','','','ROLE_USER','');
	}

	ngOnInit(){
		console.log('register.component cargado!');

	}
	onSubmit(){
		this._user_Service.register(this.user).subscribe(
              response => {
              	if(response.user){

                this.status = 'El registros se ha realizado correctamente,identificate con '+this.user.email;
            }else{

            	 this.status = 'Error al registrarse';
           }
           this.user = new User('','','','','','ROLE_USER','');
              },
              error => {
              	console.log(<any>error);
              }
			);
	}
}
