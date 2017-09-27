import { Component, Input, OnInit } from '@angular/core';

import { Student } from './../../common/students/student.model';

@Component({
  selector: 'crescer-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
