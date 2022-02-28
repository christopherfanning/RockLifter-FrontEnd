import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Validators} from "@angular/forms";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // get the data.
  project: any;
  projectId: any;
  closeResult = '';
  issueForm: any;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {

    this.issueForm = this.formBuilder.group({
      title:['', [Validators.required, Validators.minLength(1),Validators.maxLength(200)]],
      description: ['', Validators.required],
    });

  }

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
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  issueSubmit(): void {
    console.warn('Your post has been submitted', this.issueForm.value);
    // this.postData.setItem(this.projectForm.value.id, JSON.stringify(this.projectForm.value))
    this.http
      .post(`http://localhost:8443/api/project/${this.projectId}/issue`, JSON.stringify(this.issueForm.value), )
      // .post(`https://rocklifter.cfan.dev:8443/api/project`, JSON.stringify(this.projectForm.value), {'headers':this.headers})
      // .post( `https://54.173.171.184/api/project`, JSON.stringify(this.projectForm.value), {'headers':this.headers})
      .subscribe((data) => {
        console.log("I think this is the response:");
        console.log(data);

      });

    this.issueForm.reset();
  }
}
