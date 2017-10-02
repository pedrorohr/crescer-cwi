import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Student } from './../common/students/student.model';
import { StudentService } from './../common/students/student.service';

@Component({
  selector: 'crescer-seating-map',
  templateUrl: './seating-map.component.html',
  styleUrls: ['./seating-map.component.scss']
})
export class SeatingMapComponent implements OnInit {

  @ViewChild('myDiv')
  myDiv: ElementRef;

  public classFloorPlan;
  planWidth: number;
  planHeight: number;

  public students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
    console.log(this.myDiv.nativeElement.offsetWidth);
    this.planWidth = Math.min(this.myDiv.nativeElement.offsetWidth, 600);
    console.log(this.planWidth);
    this.planHeight = this.planWidth / 600 * 1000;
    console.log(this.planHeight);
    this.classFloorPlan = {
      'width.px' : this.planWidth,
      'height.px' : this.planHeight
    };
    console.log(this.classFloorPlan);
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
