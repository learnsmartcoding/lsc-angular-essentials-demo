import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface AngularTip {
  title: string;
  description: string;
  route: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
tips: AngularTip[] = [
    { 
      title: 'Angular Signals', 
      description: 'The new way to handle reactivity without Zone.js.', 
      route: '/signals', 
      level: 'Beginner' 
    },
    { 
      title: 'Control Flow (@if/@for)', 
      description: 'Modern template syntax for better performance and readability.', 
      route: '/control-flow', 
      level: 'Beginner' 
    },
    { 
      title: 'RxJS SwitchMap vs MergeMap', 
      description: 'Visualizing how different flattening operators behave.', 
      route: '/rxjs-operators', 
      level: 'Intermediate' 
    },
    { 
      title: 'Signal-Based Inputs', 
      description: 'Using the new input() API for reactive component data.', 
      route: '/inputs', 
      level: 'Advanced' 
    }
  ];

  // Logic for color-coding the badges
  getLevelClass(level: string) {
    switch(level) {
      case 'Beginner': return 'bg-success';
      case 'Intermediate': return 'bg-warning text-dark';
      case 'Advanced': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }
}
