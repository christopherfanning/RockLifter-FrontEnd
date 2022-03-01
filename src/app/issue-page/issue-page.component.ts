import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.css']
})
export class IssuePageComponent implements OnInit {

  issue: any;
  issueId: any;
  baseUrl = environment.baseUrl;

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private route: ActivatedRoute,
              private http: HttpClient
              ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let paramId: string = params.get('id') || '';
        this.issueId = paramId;
      })
    this.http
      .get(
        `${this.baseUrl}/api/issue/${this.issueId}`,
        {'headers':this.headers}
      )
      .subscribe((response) => {
        console.log(response);
        this.issue = response;
      });
  }

}
