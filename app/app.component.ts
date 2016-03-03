import {Component} from 'angular2/core';
import {Session} from './session';
import {SessionDetailComponent} from './session-detail.component';
import {SessionService} from './session.service'

@Component({
    selector: 'openspaces-board-frontend',
    template: `<div class="container-fluid">
      <div class="page-header" >
<h1>Open Spaces Board</h1>
</div>

<div class="modal fade" id="new-session-modal" tabindex="-1" role="dialog" aria-labelledby="new-session-label" aria-hidden="true">
   <div class = "modal-dialog">
      <div class = "modal-content">
         <div class = "modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class = "modal-title" id = "new-session-label">New Session</h4>
         </div>
         <div class = "modal-body">
           <form role="form">
               <div class="form-group">
                 <label for="session-title">Title</label>
                   <input type="text" class="form-control" id="session-title" placeholder="Enter session title"/>
               </div>
               <div class="form-group">
                 <label >Description</label>
                   <textarea class="form-control" id="session-description" placeholder="abstract of your session here"></textarea>
               </div>
               <button id="new-session-submit" type="submit" class="btn btn-default" data-dismiss="modal">Save</button>
             </form>
         </div>
         <div class = "modal-footer">
         </div>
      </div><!-- /.modal-content -->
   </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<div class="collapse navbar-collapse" >
    <ul class="nav navbar-nav">
      <li class="active"><button id="btn-new-session" type="button" class="btn btn-primary" data-toggle="modal" data-target="#new-session-modal">Add Session</button></li>
    </ul>
</div>

    <ol class="date-list list-unstyled">
  <li *ngFor="#session of sessions" class="draggable tile session"
  [class.selected]="session === selectedSession"
        (click)="onSelect(session)">
    <div class="tile-inner">
    <span class="badge">{{session.space}}</span>
    <p class="session-title">{{session.title}} <span>{{session.convener}}</span></p>
  </div>
  </li>
</ol>
<session-detail [session]="selectedSession"></session-detail>
</div>`,
styles:[`
.selected {
      background-color: #CFD8DC !important;
      color: white;
    }
.tile-area {
  border: 1px;
  width: 100%;
}
  .draggable {
  }

  .session {
    text-align: center;
    vertical-align: middle;
    background: #5757EF;
    color: white;
  }

  .tile {
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    width: 100px;
    height: 100px;
    display: table;
    overflow: hidden;
    margin: 5px;
  }
  .tile-inner {
    display: table-cell;
    vertical-align: middle;
  }
`],
directives: [SessionDetailComponent],
providers: [SessionService]
})

export class AppComponent {
  title = 'Open Spaces Board';
  sessions: Session[];
  selectedSession: Session;

  constructor(private _sessionService: SessionService) { }

  getSessions() {
      this._sessionService.getSessions().then(sessions => this.sessions = sessions);
    }

  ngOnInit() {
    this.getSessions();
  }

  onSelect(session: Session) { console.log("onSelect"); this.selectedSession = session; };
}
