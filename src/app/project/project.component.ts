import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // get the data.
  projects: any;



  constructor(private http: HttpClient) { }


ngOnInit(): void {
  this.http
    .get(
      `http://localhost:9092/api/project`
    )
    .subscribe((response) => {
      console.log(response);
      this.projects = response;
    });
}

}
