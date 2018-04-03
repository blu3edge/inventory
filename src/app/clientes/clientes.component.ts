import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'clientes',
	templateUrl: './clientes.component.html'
	
})
export class ClientesComponent implements OnInit{

	public title: String;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	)
	{
		this.title = 'Clientes';
	}

	ngOnInit(){
		console.log('cliente.component cargado!');
	}
}