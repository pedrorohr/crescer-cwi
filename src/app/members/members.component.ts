import { Student } from './../common/students/student.model';
import { Component, OnInit } from '@angular/core';

import { StudentService } from './../common/students/student.service';

@Component({
  selector: 'crescer-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  public students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
