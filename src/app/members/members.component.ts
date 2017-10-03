import { Component, OnInit } from '@angular/core';

import { Instructor } from './../common/instructors/instructor.model';
import { InstructorService } from './../common/instructors/instructor.service';
import { Student } from './../common/students/student.model';
import { StudentService } from './../common/students/student.service';

@Component({
  selector: 'crescer-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  public students: Student[];
  public instructors: Instructor[];
  public filteredStudents: Student[];
  public filteredInstructors: Instructor[];
  public searchIconFocus: boolean;

  constructor(private studentService: StudentService, private instructorService: InstructorService) { }

  public toggleSearchIcon(): void {
    this.searchIconFocus = !this.searchIconFocus;
  }

  public searchMember(searchText: string): void {
    const lowerCasedSearchText = searchText.toLocaleLowerCase();
    this.filteredStudents = this.students.filter(
          student => (student.firstName + ' ' + student.lastName)
                      .toLocaleLowerCase().indexOf(lowerCasedSearchText) > -1
    );
    this.filteredInstructors = this.students.filter(
      instructor => (instructor.firstName + ' ' + instructor.lastName)
                  .toLocaleLowerCase().indexOf(lowerCasedSearchText) > -1
);
}
  ngOnInit() {
    this.students = this.filteredStudents = this.studentService.getStudents();
    this.instructors = this.filteredInstructors = this.instructorService.getInstructors();
    this.searchIconFocus = false;
  }

}
