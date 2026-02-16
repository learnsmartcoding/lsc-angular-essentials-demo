import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, map } from 'rxjs/operators';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-interop.html',
  styleUrls: ['./rxjs-interop.css']
})
export class RxjsInterop {
  private http = inject(HttpClient);

  // 1. Convert Observable to Signal
  // No .subscribe(), no manual cleanup, no async pipe needed in HTML!
  users = toSignal(
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      delay(2000), // Simulating network lag for the demo
      map(data => data.slice(0, 5))
    ),
    { initialValue: [] as User[] }
  );

  // 2. Check loading state reactively
  // Since 'users' is a signal, we can use it in a computed value
  isLoading = toSignal(
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map(() => false)
    ), 
    { initialValue: true }
  );
}