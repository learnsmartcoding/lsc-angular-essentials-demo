import { Component, viewChild, ElementRef, effect, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-queries-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './queries-demo.html',
  styleUrl: './queries-demo.css'
})
export class Queries {
  // 1. The new Signal Query
  // No more @ViewChild('nameInput') nameInput!: ElementRef;
  inputElement = viewChild.required<ElementRef<HTMLInputElement>>('nameInput');
  

  constructor() {
    // 2. We can react to the element being available inside an effect!
    effect(() => {
      if (this.inputElement()) {
        console.log('DOM Element is now available and tracked via Signal!');
      }
    });
  }

  focusInput() {
    // 3. Accessing the value is just like any other signal: ()
    this.inputElement().nativeElement.focus();
  }
}