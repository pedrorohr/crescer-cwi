import { Injectable } from '@angular/core';

import { Student } from './student.model';
import { students } from './students.mock';

@Injectable()
export class StudentService {
    private students: Student[];

    constructor() {
        this.init();
    }

    public getStudents(): Student[] {
        return this.students;
    }

    public getStudent(id: number): Student {
        return this.students.find(student => student.id === +id);
    }

    private init(): void {
        this.students = students;
    }
}
