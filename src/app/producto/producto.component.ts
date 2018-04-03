import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'Producto',
	templateUrl: './producto.component.html'
	
})
export class ProductoComponent implements OnInit{

	public title: String;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	)
	{
		this.title = 'Ingreso de Bienes';
	}

	ngOnInit(){
		console.log('producto.component cargado!');
	}
}