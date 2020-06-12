import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  StudentID: number = 1;
  constructor(public service: StudentService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      StudentID: null,
      Name: '',
      Description: '',
      Date_of_Birth: new Date(),
      Subjects: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.StudentID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postStudent(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putStudent(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }
}
