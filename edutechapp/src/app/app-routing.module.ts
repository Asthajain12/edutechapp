import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';


const routes: Routes = [
  {path: '', redirectTo:'',pathMatch:'full'},
  {path: '**',component: PageNotExistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
