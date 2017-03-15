import { Component } from '@angular/core';
import {PostService} from '../app/services/postService';
import {Observable} from "rxjs";
import {TaskObject} from '../app/model/taskobject';
import {EmitterService} from '../app/services/emitter.service'


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
    <h1>ewrdwf</h1>   
    </div>
    
    
    <li *ngFor="let post of posts; let i =index">
        <label>{{posts[i][0].id|json}}</label>
        <label></label>
    </li>
   
    
           

`,
    providers: [PostService]
})
export class AppComponent {
    name: string;
    values: string[];
    otherValues: string;
    posts: TaskObject[];



    constructor(private postService: PostService) {
        this.name = 'Grodan boll';
        this.values = ['foo', 'goo'];
        this.otherValues = 'idk';

        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
    addValue(newvalue: string) {
        this.values.push(newvalue);
    }

}