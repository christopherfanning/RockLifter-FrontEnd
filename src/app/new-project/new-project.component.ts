import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  projectForm: any;

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
      .post(`http://localhost:9092/api/project`, JSON.stringify(this.projectForm.value))
      .subscribe((data) => {
        console.log(data)

      });

    this.projectForm.reset();
  }
}
