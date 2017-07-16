import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {VarsComponent} from './components/vars/vars.component';
import {ServersComponent} from './components/servers/server.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule , HttpModule,FormsModule],
  declarations: [ AppComponent,VarsComponent , ServersComponent ],
  bootstrap:    [ AppComponent ],
  exports: [VarsComponent,ServersComponent]
})
export class AppModule { }
