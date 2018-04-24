import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './component/home.component';
import { ErrorComponent } from './component/error.component';
import { ProductosListComponent } from './component/productos-list.component';
import { ProductoComponent } from './producto/producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { RegisterComponent } from './register/register.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [

{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'productos' , component: ProductosListComponent},
{path: 'ingresarproductos' , component: ProductoComponent},
{path: 'proveedores' , component: ProveedoresComponent},
{path: 'clientes' , component: ClientesComponent},
{path: 'reportes' , component: ReportesComponent},
{path: 'registro' , component: RegisterComponent},
{path: 'login' , component: LoginComponent},
{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
