import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
interface Course {
  id: number;
  title: string;
  status: 'Published' | 'Draft' | 'Archived' | 'something';
}

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
isLoading = signal(false);
  
  courses = signal<Course[]>([
    { id: 1, title: 'Angular Signals Masterclass', status: 'Published' },
    { id: 2, title: 'RxJS Deep Dive', status: 'Draft' },
    { id: 3, title: 'Unit Testing for Pros', status: 'Archived' },
    { id: 4, title: 'Unit Testing for Pros', status: 'something' }
  ]);

  toggleLoading() {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 1500);
  }

  clearCourses() {
    this.courses.set([]);
  }

  resetCourses() {
    this.courses.set([
      { id: 1, title: 'Angular Signals Masterclass', status: 'Published' },
      { id: 2, title: 'RxJS Deep Dive', status: 'Draft' },
      { id: 3, title: 'Unit Testing for Pros', status: 'Archived' }
    ]);
  }
}
