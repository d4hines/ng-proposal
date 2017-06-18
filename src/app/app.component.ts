import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeState = true;
  state = 'active';
  heroes = [
    { name: 'bill', state: 'inactive' },
    { name: 'bob', state: 'inactive' }
  ];
  toggle(): void {
    this.welcomeState = !this.welcomeState;
  }
  // animations = [
  //   trigger('heroState', [
  //     state('inactive', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('active', style({
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(10)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out')),
  //     transition(':enter', animate('')); // void => *
  //     transition(':leave', [ ... ]); // * => void
  //   ])
  // ];
}
