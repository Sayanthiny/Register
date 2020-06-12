import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from 'src/app/shared/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public service: StudentService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
   populateForm(stu: Student) {
    this.service.formData = Object.assign({}, stu);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteStudent(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }
}


