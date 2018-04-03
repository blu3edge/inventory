import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//rutas
import { routing, appRoutingProviders } from './app.routing'
//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { ErrorComponent } from './component/error.component';
import { ProductosListComponent } from './component/productos-list.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//angular material

//graficos
import { ChartsModule } from 'ng2-charts';
import { DonaComponent } from './graficos/principal/dona/dona.component';
import { BarraComponent } from './graficos/principal/barra/barra.component';
import { BarraMensualComponent } from './graficos/principal/barra-mensual/barra-mensual.component';
import { LinealComponent } from './graficos/principal/lineal/lineal.component';



//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoComponent,
    ProveedoresComponent,
    ClientesComponent,
    ReportesComponent,
    RegisterComponent,
    LoginComponent,
    DonaComponent,
    BarraComponent,
    BarraMensualComponent,
    LinealComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule
   
    
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
