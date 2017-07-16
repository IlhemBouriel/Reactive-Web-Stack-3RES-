import { Component , Input } from '@angular/core';
import {ServersService} from '../../services/servers/servers.service';
import {Server} from '../../../Server';


@Component({
    moduleId:module.id,
  selector: 'servers',
  templateUrl:'server.component.html'
})
export class ServersComponent {
    servers:Server[];
    serverService :ServersService;

 //initialize Actor Compoentn
    ngOnInit(){
       this.getAllServers();
    }

    getAllServers()
    {
        //getVars is an observable so we need to subscribe to it
       this.serverService.getServers().
        subscribe(servers => {
            this.servers = servers;
        });
    }

   

    constructor(){
       
        console.log("Serveri Component");
        
    }




}