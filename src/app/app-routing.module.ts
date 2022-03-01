import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewProjectComponent} from "./new-project/new-project.component";
import {HomeComponent} from "./home/home.component";
import {ProjectComponent} from "./project/project.component";
import {ProjectListComponent} from "./project-list/project-list.component";
import {IssuePageComponent} from "./issue-page/issue-page.component";

const routes: Routes = [
  {
    path: 'project',
    component: ProjectListComponent
  },
  {
    path: 'project/:id',
    component: ProjectComponent
  },
  {
    path: 'issue/:id',
    component: IssuePageComponent
  },
  {
    path: 'new/project',
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
