import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
// 1. Writable Signals
  productName = signal('Angular Pro Laptop');
  price = signal(1200);
  quantity = signal(1);

  // 2. Computed Signal (Derived State)
  // Automatically re-calculates ONLY when price or quantity changes
  totalCost = computed(() => this.price() * this.quantity());

  // 3. Effect (Side Effects)
  constructor() {
    effect(() => {
      // This runs whenever any signal inside it changes
      console.log(`Log: Inventory updated. New Total: $${this.totalCost()}`);
    });
  }

  // Methods to update state
  increment() {
    this.quantity.update(q => q + 1);
  }

  decrement() {
    if (this.quantity() > 0) {
      this.quantity.update(q => q - 1);
    }
  }

  updatePrice(newPrice: string) {
    this.price.set(Number(newPrice));
  }
}
