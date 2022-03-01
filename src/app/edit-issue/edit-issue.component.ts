import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../environments/environment";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ElementRef } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {

  issue: any;
  issueId: any;
  editIssueForm: any;

  closeResult: any;
  baseUrl = environment.baseUrl;

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');


  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private modalService: NgbModal,
              private router: Router,
              private formBuilder: FormBuilder,
              private ele: ElementRef
  ) {
    this.editIssueForm = this.formBuilder.group({
      title:[``, [Validators.required, Validators.minLength(1),Validators.maxLength(200)]],
      description: ['', Validators.required],
      status: ['']
    });

  }


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

        this.editIssueForm = this.formBuilder.group({
          title:[this.issue.title, [Validators.required, Validators.minLength(1),Validators.maxLength(200)]],
          description: [this.issue.description, Validators.required],
          status: [this.issue.status]
        });
      });
  }

  issueSubmit(): void {
    console.warn('Your post has been submitted', this.editIssueForm.value);
    // this.postData.setItem(this.projectForm.value.id, JSON.stringify(this.projectForm.value))
    this.http
      .post(`${this.baseUrl}/api/issue/${this.issueId}`, JSON.stringify(this.editIssueForm.value),
        {'headers':this.headers})
      .subscribe((data) => {
        console.log("I think this is the response:");
        console.log(data);

      });

    this.editIssueForm.reset();
    this.router.navigate([`/issue/${this.issueId}`]);
  }










}
