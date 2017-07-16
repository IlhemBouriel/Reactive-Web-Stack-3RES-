import { Component , Input } from '@angular/core';
import {VarsService} from '../../services/vars/vars.service';
import {Vars} from '../../../Vars';


@Component({
    moduleId:module.id,
  selector: 'vars',
  templateUrl:'vars.component.html'
})
export class VarsComponent {
    vars:Vars[];
    varsService :VarsService;

 //initialize Actor Compoentn
    ngOnInit(){
       this.getAllVars();
    }

    getAllVars()
    {
        //getVars is an observable so we need to subscribe to it
       this.varsService.getVars().
        subscribe(vars => {
            this.vars = vars;
        });
    }

   

    //we inject varsService into ActorComponent
    constructor(){
       
        console.log("vars Component");
        
    }




}