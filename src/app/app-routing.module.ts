import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewProjectComponent} from "./new-project/new-project.component";

const routes: Routes = [

  {
    path: 'project/new',
    component: NewProjectComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
