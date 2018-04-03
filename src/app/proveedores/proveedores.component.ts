import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'Proveedores',
	templateUrl: './proveedores.component.html'
	
})
export class ProveedoresComponent implements OnInit{

	public title: String;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	)
	{
		this.title = 'Proveedores';
	}

	ngOnInit(){
		console.log('provedores.component cargado!');
	}
}