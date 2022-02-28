import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // get the data.
  project: any;
  projectId: any;

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

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }


ngOnInit(): void {
  this.route.paramMap
    .subscribe(params => {
      let paramId: string = params.get('id') || '';
      this.projectId = paramId;
    })
  this.http
    .get(
      `http://localhost:8443/api/project/${this.projectId}`,
      // `https://rocklifter.cfan.dev:8443/api/project`
      // `https://54.173.171.184/:8443/api/project`,
      // {'headers':this.headers}
    )
    .subscribe((response) => {
      console.log(response);
      this.project = response;
    });
}

}
