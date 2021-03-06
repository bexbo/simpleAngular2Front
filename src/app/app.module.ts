import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';
import {KeysPipe} from '../app/model/ObjectPipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent, KeysPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
