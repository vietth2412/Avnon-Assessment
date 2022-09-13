import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'form', loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule) },
  { path: '**', redirectTo: 'form/builder' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
