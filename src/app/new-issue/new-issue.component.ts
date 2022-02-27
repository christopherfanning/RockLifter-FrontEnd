import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  issueForm: any;
  projectId: any;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {

    this.issueForm = this.formBuilder.group({
      title:['', [Validators.required, Validators.minLength(1),Validators.maxLength(200)]],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn('Your post has been submitted', this.issueForm.value);
    // this.postData.setItem(this.projectForm.value.id, JSON.stringify(this.projectForm.value))
    this.http
      .post(`http://localhost:8081/api/project/${projectId}/issue`, JSON.stringify(this.issueForm.value))
      // .post(`http://localhost:8081/api/project`, JSON.stringify(this.issueForm.value), {'headers':this.headers})
      // .post(`https://rocklifter.cfan.dev:8443/api/project`, JSON.stringify(this.projectForm.value), {'headers':this.headers})
      // .post( `https://54.173.171.184/api/project`, JSON.stringify(this.projectForm.value), {'headers':this.headers})
      .subscribe((data) => {
        console.log("I think this is the response:");
        console.log(data);

      });

    this.issueForm.reset();
  }
}
