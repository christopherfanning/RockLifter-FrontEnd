import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { IssuePageComponent } from './issue-page/issue-page.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NewProjectComponent,
    HomeComponent,
    NavComponent,
    NewIssueComponent,
    ProjectListComponent,
    IssuePageComponent,
    EditIssueComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
