import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})

export class NewProjectComponent implements OnInit {
  projectForm: any;
  baseUrl = environment.baseUrl;

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {


    this.projectForm = this.formBuilder.group({
      title:['', [Validators.required, Validators.minLength(1),Validators.maxLength(200)]],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn('Your post has been submitted', this.projectForm.value);
    // this.postData.setItem(this.projectForm.value.id, JSON.stringify(this.projectForm.value))
    this.http
      .post(`${this.baseUrl}/api/project`, JSON.stringify(this.projectForm.value), {'headers':this.headers})
      // .post(`https://rocklifter.cfan.dev:8443/api/project`, JSON.stringify(this.projectForm.value), {'headers':this.headers})
      // .post( `https://54.173.171.184:8443/api/project`, JSON.stringify(this.projectForm.value), {'headers':this.headers})
      .subscribe((data) => {
        console.log("I think this is the response:");
        console.log(data);

      });

    this.projectForm.reset();
  }
}
