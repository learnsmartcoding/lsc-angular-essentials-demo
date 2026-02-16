import { Component, input, model, computed, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  template: `
    <div class="border rounded p-3 bg-light">
      <h4>Child: Profile Card</h4>
      <p>User: {{ userName() }}</p>
      <p>Status: {{ role() }}</p>
      
      <button class="btn btn-sm btn-primary" (click)="toggleAdmin()">
        Toggle Admin Role
      </button>
    </div>
  `
})
export class ProfileCard {
  // 1. Read-only Signal Input
  userName = input.required<string>(); 
  
  // 2. Two-way Signal (Model)
  isAdmin = model<boolean>(false);

  // 3. Derived state from input
  role = computed(() => this.isAdmin() ? 'Administrator' : 'Subscriber');

  toggleAdmin() {
    this.isAdmin.update(val => !val);
  }
}