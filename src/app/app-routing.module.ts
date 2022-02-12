import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


  //Componentes
  import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';  

  const routes: Routes = [
    {path:'', redirectTo:'/IngresarPresupuesto', pathMatch: 'full'},
    {path:'IngresarPresupuesto',component:IngresarPresupuestoComponent},
    {path:'gastos',component:GastosComponent},
    {path:'**',redirectTo:'/IngresarPresupuesto', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
