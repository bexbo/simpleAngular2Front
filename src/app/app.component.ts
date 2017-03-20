import { Component } from '@angular/core';
import {PostService} from '../app/services/postService';
import {Observable} from "rxjs";
import {TaskObject} from '../app/model/taskobject';
import {KeysPipe} from '../app/model/ObjectPipe';
import {EmitterService} from '../app/services/emitter.service';

import {FormBuilder,Validators} from '@angular/forms';



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
   <form *ngFor="let post of posts; let i =index" (submit)="addValue(post.values[1])" >
  
   <label>id:</label>
   <input type="text" name="id" value={{post.id}} #id/><br>
   <label>type:</label>
   <input type="text" name="type" value={{post.type}} #type/><br>
   
   <p *ngFor="let value of post.values; let j= index">
        <label>Value_{{j+1}}:</label>
        
        
        <input type="text" [(ngModel)]="post.values[j]" name={{j}} value={{value}} /><br>
   </p>
   
   
   
   <p *ngFor="let other_value of post.other_values|keys">
  <label>{{other_value.key}}</label>
   <input type = "text" name ="other_value" value={{other_value.value}}>
   <br>
    </p>
   
   
   <button type="submit">submit</button>
   </form >
   
     
    
   
   
   
    
           

`,

    providers: [PostService],

})
export class AppComponent {
    name: string;
    values: string[];
    otherValues: string;
    posts: TaskObject[];
    formValues: any;



    constructor(private postService: PostService) {
        this.name = 'Grodan boll';
        this.values = ['foo', 'goo'];
        this.otherValues = 'idk';



        this.postService.getPosts().subscribe(posts => {
            this.posts = this.convertTaskResponse(posts);

        });




    }
    convertTaskResponse(response: Array<Object>):TaskObject[]{

        let tasks = new Array<TaskObject>();
        for (let taskObject of response){
            let task = this.convertTaskObject(taskObject);
            tasks.push(task);


        }
        return tasks;


    }

    convertTaskObject(object:Object) :TaskObject{
        let newTaskObject = new TaskObject();
        newTaskObject.id=object["id"];
        newTaskObject.type=object["type"];
        newTaskObject.other_values=object["other_values"];
        for (let key in object){
            if(key.substring(0,6)=="value_"){
                newTaskObject.values.push(object[key]);

            }

        }
        return newTaskObject;



    }
    addValue(newvalue: string) {

        this.values.push(newvalue);
    }

    submitform(){
        this.formValues = this.completeForm.formValues;
    }


}

