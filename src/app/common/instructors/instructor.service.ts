import { Injectable } from '@angular/core';

import { Instructor } from './instructor.model';
import { instructors } from './instructors.mock';

@Injectable()
export class InstructorService {
    private instructors: Instructor[];

    constructor() {
        this.init();
    }

    public getInstructors(): Instructor[] {
        return this.instructors;
    }

    public getInstructor(id: number): Instructor {
        return this.instructors.find(instructor => instructor.id === +id);
    }

    private init(): void {
        this.instructors = instructors.sort(
            (instructorA, instructorB) => (instructorA.firstName + ' ' + instructorA.lastName).
                             localeCompare(instructorB.firstName + ' ' + instructorB.lastName));
    }
}
