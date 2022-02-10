import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';

  //Componentes
  import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
  import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

  const routes: Routes = [
    {path:'', redirectTo:'/IngresarPresupuesto', pathMatch: 'full'},
    {path:'IngresarPresupuesto',component:IngresarGastoComponent},
    {path:'gasto',component:GastosComponent},
    {path:'**',redirectTo:'/IngresarPresupuesto', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
