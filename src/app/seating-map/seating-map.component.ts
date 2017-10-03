import { Component, OnInit } from '@angular/core';

import { Instructor } from './../common/instructors/instructor.model';
import { InstructorService } from './../common/instructors/instructor.service';
import { Student } from './../common/students/student.model';
import { StudentService } from './../common/students/student.service';

@Component({
  selector: 'crescer-seating-map',
  templateUrl: './seating-map.component.html',
  styleUrls: ['./seating-map.component.scss']
})
export class SeatingMapComponent implements OnInit {

  public instructors: Instructor[];
  public students: Student[];

  constructor(private studentService: StudentService, private instructorService: InstructorService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
    this.instructors = this.instructorService.getInstructors();
  }

  public getInstructor(): Instructor[] {
    return this.instructors
    .filter(instructor => instructor.position === 100);
  }

  public getFirstRowFirstColumn(): Student[] {
    return this.getStudentsFilteredAndSorted(0, 2);
  }

  public getFirstRowSecondColumn(): Student[] {
    return this.getStudentsFilteredAndSorted(3, 5);
  }

  public getSecondRowFirstColumn(): Student[] {
    return this.getStudentsFilteredAndSorted(6, 8);
  }

  public getSecondRowSecondColumn(): Student[] {
    return this.getStudentsFilteredAndSorted(9, 11);
  }

  public getThirdRowFirstColumn(): Student[] {
    return this.getStudentsFilteredAndSorted(12, 14);
  }

  public getThirdRowSecondColumn(): Student[] {
    return this.getStudentsFilteredAndSorted(15, 17);
  }

  public getLastRow(): Student[] {
    return this.getStudentsFilteredAndSorted(18, 24);
  }

  private getStudentsFilteredAndSorted(initial: number, final: number): Student[] {
    return this.students
    .filter(student => student.position >= initial && student.position <= final)
    .sort((studentA, studentB) => studentA.position - studentB.position);
  }
}
