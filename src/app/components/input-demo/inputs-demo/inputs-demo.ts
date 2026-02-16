import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCard } from '../profile-card/profile-card';


@Component({
  selector: 'app-inputs-demo',
  standalone: true,
  imports: [CommonModule, ProfileCard],
  template: `
    <div class="card p-4 shadow-sm">
      <h2>Parent Component</h2>
      <p>Parent Signal Value: <strong>{{ isAdmin() }}</strong></p>
      <hr>
      <app-profile-card 
        [userName]="'LSC Viewer'" 
        [(isAdmin)]="isAdmin" />
    </div>
  `
})
export class Inputs {
  isAdmin = signal(false);
}