import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewProjectComponent} from "./new-project/new-project.component";
import {HomeComponent} from "./home/home.component";
import {ProjectComponent} from "./project/project.component";

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent
  },
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
