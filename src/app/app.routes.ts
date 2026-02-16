import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'LSC | Angular Essentials Home',
  },
  {
    path: 'signals',
    loadComponent: () => import('./components/signals/signals').then((m) => m.Signals),
    title: 'LSC | Signals Demo',
  },
  {
    path: 'control-flow',
    loadComponent: () =>
      import('./components/control-flow/control-flow').then((m) => m.ControlFlow),
    title: 'LSC | Control Flow Demo',
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./components/input-demo/inputs-demo/inputs-demo').then((m) => m.Inputs),
    title: 'LSC | Angular Signal Inputs: Stop Using @Input() Forever!',
  },
  {
    path: 'queries-demo',
    loadComponent: () => import('./components/queries-demo/queries-demo').then((m) => m.Queries),
    title: 'LSC | Angular ViewChild is DEAD: Use Signal Queries Instead!',
  },
  {
    path: 'rxjs-operators',
    loadComponent: () =>
      import('./components/rxjs-interop/rxjs-interop').then((m) => m.RxjsInterop),
    title: 'LSC | RxJS + Signals: The Perfect Duo in Angular!',
  },
  // Wildcard route for 404 handling - redirected to Home
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
