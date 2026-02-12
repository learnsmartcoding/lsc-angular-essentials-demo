import { Routes } from '@angular/router';
import { Home } from './components/home/home';


export const routes: Routes = [
  { 
    path: '', 
    component: Home, 
    title: 'LSC | Angular Essentials Home' 
  },
  { 
    path: 'signals', 
    loadComponent: () => import('./components/signals/signals').then(m => m.Signals),
    title: 'LSC | Signals Demo'
  },
//   { 
//     path: 'control-flow', 
//     loadComponent: () => import('./demos/control-flow/control-flow.component').then(m => m.ControlFlowComponent),
//     title: 'LSC | Modern Control Flow'
//   },
//   { 
//     path: 'rxjs-operators', 
//     loadComponent: () => import('./demos/rxjs/rxjs.component').then(m => m.RxjsComponent),
//     title: 'LSC | RxJS Best Practices'
//   },
//   { 
//     path: 'inputs', 
//     loadComponent: () => import('./demos/inputs/inputs.component').then(m => m.InputsComponent),
//     title: 'LSC | Signal-Based Inputs'
//   },
  // Wildcard route for 404 handling - redirected to Home
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];
