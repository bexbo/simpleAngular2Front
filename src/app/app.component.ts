import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <div name="'Object">
    <ul>
        
        <li *ngFor="let value of values; let i = index">
        <label>Value:{{i+1}} is {{value}} </label>
          
        </li>
        <form (submit)="addValue(thing.value)">
          
            <input type="text" #thing/>
            
         </form>   
    </ul>
    
   
    </div>


`,
})
export class AppComponent  {
    name: string;
    values: string[];
    otherValues: string;

    constructor(){
        this.name = 'Grodan boll';
        this.values = ['foo','goo'];
        this.otherValues = 'idk'

}
    addValue(newvalue){
        this.values.push(newvalue);
    }

}
