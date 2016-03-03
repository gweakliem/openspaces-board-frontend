import {Component} from 'angular2/core';
import {Session} from './session';

@Component({
  selector: 'session-detail',
  template: `
  <div *ngIf="session">
        <h2>{{session.title}}</h2>
        <div><label>id: </label>{{session.id}}</div>
        <div>
          <label>title: </label>
          <input [(ngModel)]="session.title" placeholder="title"/>
        </div>
      </div>
  `,
  inputs: ['session']
})
export class SessionDetailComponent {
  session: Session;
}
