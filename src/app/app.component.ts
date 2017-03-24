import { Component, OnInit } from '@angular/core';
import {PostService} from '../app/services/postService';
import {TaskObject} from '../app/model/taskobject';


@Component({
  selector: 'my-app',
  templateUrl: '../app/app.component.html',

  providers: [PostService]

})
export class AppComponent implements OnInit{


    posts: TaskObject[];



    constructor(private postService: PostService) {
    }

    ngOnInit(){

        this.postService.getPosts().subscribe(posts => {     //gets all the taskobjects from previous sessions from the backend
            this.posts = this.convertTaskResponse(posts);

        });




    }
    convertTaskResponse(response: Array<Object>):TaskObject[]{//converts array of JSON-objects to array of TaskObjects

        let tasks = new Array<TaskObject>();
        for (let taskObject of response){
            let task = this.convertTaskObject(taskObject);
            tasks.push(task);


        }
        return tasks;


    }

    convertTaskObject(object:Object) :TaskObject{ //converts a single JSON-object to a single TaskObject
        let newTaskObject = new TaskObject();
        newTaskObject.num=object["num"];
        newTaskObject.type=object["type"];
        newTaskObject.unique_id=object["unique_id"];

        if(object["other_values"]!=null) {     //back-end will set other_values= null when empty
            newTaskObject.other_values = object["other_values"];
        }
        if(object["values"]!=null) { //back-end will set values= null when empty
            newTaskObject.values = object["values"];
        }



        return newTaskObject;



    }



   pushValue(index:number, value:string){ //pushes new value to taskobject at index "index" in posts and sends object to backend


       this.posts[index].values.push(value);


       this.postService.updateObject(this.posts[index]).subscribe(() => {

       });

   }
   pushOtherValue(index:number, newkey:string, newvalue:string){ //pushes new value to taskobject at index "index" in posts and sends object to backend


       this.posts[index].other_values[newkey]=newvalue;

       this.postService.updateObject(this.posts[index]).subscribe(() => {

       });

   }




    updateObject(index: number){ //is used in template to send the updated data to backend

        let object = this.posts[index];
        this.postService.updateObject(object).subscribe(() => {

        });


    }
    createNew (type: string, num:number){ //is used in template to create new object
        let taskObject= new TaskObject();
        taskObject.num = num;
        taskObject.type= type;

        this.postService.createObject(taskObject).subscribe(post => {  //posts to back-end which returns TaskObject-JSON with unique id

            this.posts.push(this.convertTaskObject(post));

        });







    }

    customTrackBy(index: number, obj: any): any {//is used to track values in ngFor
        return index;
    }

    deleteObject(index: number){ //is used in template to delete object

        this.postService.deleteObject(this.posts[index]).subscribe(() => {
        });

        this.posts.splice(index,1);



        }


}

