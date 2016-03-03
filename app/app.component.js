System.register(['angular2/core', './session-detail.component', './session.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, session_detail_component_1, session_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (session_detail_component_1_1) {
                session_detail_component_1 = session_detail_component_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_sessionService) {
                    this._sessionService = _sessionService;
                    this.title = 'Open Spaces Board';
                }
                AppComponent.prototype.getSessions = function () {
                    var _this = this;
                    this._sessionService.getSessions().then(function (sessions) { return _this.sessions = sessions; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getSessions();
                };
                AppComponent.prototype.onSelect = function (session) {
                    console.log("onSelect");
                    this.selectedSession = session;
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'openspaces-board-frontend',
                        template: "<div class=\"container-fluid\">\n      <div class=\"page-header\" >\n<h1>Open Spaces Board</h1>\n</div>\n\n<!-- TODO: refactor this to another module -->\n<div class=\"modal fade\" id=\"new-session-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"new-session-label\" aria-hidden=\"true\">\n   <div class = \"modal-dialog\">\n      <div class = \"modal-content\">\n         <div class = \"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n            <h4 class = \"modal-title\" id = \"new-session-label\">New Session</h4>\n         </div>\n         <div class = \"modal-body\">\n           <form role=\"form\">\n               <div class=\"form-group\">\n                 <label for=\"session-title\">Title</label>\n                   <input type=\"text\" class=\"form-control\" id=\"session-title\" placeholder=\"Enter session title\"/>\n               </div>\n               <div class=\"form-group\">\n                 <label >Description</label>\n                   <textarea class=\"form-control\" id=\"session-description\" placeholder=\"abstract of your session here\"></textarea>\n               </div>\n               <button id=\"new-session-submit\" type=\"submit\" class=\"btn btn-default\" data-dismiss=\"modal\">Save</button>\n             </form>\n         </div>\n         <div class = \"modal-footer\">\n         </div>\n      </div><!-- /.modal-content -->\n   </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div class=\"collapse navbar-collapse\" >\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><button id=\"btn-new-session\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#new-session-modal\">Add Session</button></li>\n    </ul>\n</div>\n\n    <ol class=\"date-list list-unstyled\">\n  <li *ngFor=\"#session of sessions\" class=\"draggable tile session\"\n  [class.selected]=\"session === selectedSession\"\n        (click)=\"onSelect(session)\">\n    <div class=\"tile-inner\">\n    <span class=\"badge\">{{session.space}}</span>\n    <p class=\"session-title\">{{session.title}} <span>{{session.convener}}</span></p>\n  </div>\n  </li>\n</ol>\n<session-detail [session]=\"selectedSession\"></session-detail>\n</div>",
                        styles: ["\n.selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n.tile-area {\n  border: 1px;\n  width: 100%;\n}\n  .draggable {\n  }\n\n  .session {\n    text-align: center;\n    vertical-align: middle;\n    background: #5757EF;\n    color: white;\n  }\n\n  .tile {\n    -webkit-border-radius: 20px;\n    -moz-border-radius: 20px;\n    border-radius: 20px;\n    width: 100px;\n    height: 100px;\n    display: table;\n    overflow: hidden;\n    margin: 5px;\n  }\n  .tile-inner {\n    display: table-cell;\n    vertical-align: middle;\n  }\n"],
                        directives: [session_detail_component_1.SessionDetailComponent],
                        providers: [session_service_1.SessionService]
                    }), 
                    __metadata('design:paramtypes', [session_service_1.SessionService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map