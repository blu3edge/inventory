import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'reportes',
	templateUrl: './reportes.component.html'
	
})
export class ReportesComponent implements OnInit{

	public title: String;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	)
	{
		this.title = 'Reportes';
	}

	ngOnInit(){
		console.log('reportes.component cargado!');
	}
}