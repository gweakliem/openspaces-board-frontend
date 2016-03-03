import {Injectable} from 'angular2/core';
import {SESSIONS} from './mock-sessions';

@Injectable()
export class SessionService {
  getSessions() {
    return Promise.resolve(SESSIONS);
  }
}
