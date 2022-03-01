import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  // get the data.
  projects: any;
  baseUrl = environment.baseUrl;
  // projectId: any;

  // headers= new HttpHeaders()
  //   .set('content-type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*');

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': ' http://localhost:4200',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': ' POST, GET, OPTIONS, DELETE',
    'Access-Control-Max-Age': ' 3600',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me',
    'Authorization':
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXRlbTEyMyIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfRU1Q'
  });

  constructor(private http: HttpClient) {
    // this.projectId = getProjectId();
  }

  getProjectId(){

  }

  ngOnInit(): void {
    // gets all the projects.
    this.http
      .get(
        `${this.baseUrl}/api/project`,
        // `https://rocklifter.cfan.dev:8443/api/project`
        // `https://54.173.171.184/:8443/api/project`,
        // {'headers':this.headers}
      )
      .subscribe((response) => {
        console.log(response);
        this.projects = response;
      });
  }

}
