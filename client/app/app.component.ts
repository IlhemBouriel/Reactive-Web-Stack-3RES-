import { Component } from '@angular/core';
import {VarsService} from './services/vars/vars.service';
import {ServersService} from './services/servers/servers.service';
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'app.component.html',
  providers: [VarsService,ServersService]
})
export class AppComponent {
  
}