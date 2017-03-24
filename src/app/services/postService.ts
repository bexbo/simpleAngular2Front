/**
 * Created by kamrat_benny on 2017-03-15.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {TaskObject} from '../Model/taskobject';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class PostService {

    constructor(private http: Http){
    }

    getPosts():Observable<TaskObject[]>{ //gets all the initial values from the back-end
        return this.http.get('http://localhost:8888/simpleLaravelBack/public/api/getObjects')
            .map((res: Response)=>res.json());


    }

    createObject(taskObject: TaskObject):Observable<TaskObject>{ //creates a new taskobject on the backend
        let jsonString = JSON.stringify(taskObject);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('http://localhost:8888/simpleLaravelBack/public/api/createObject',jsonString, options) //needs to return an observable in order to function
            .map((res:Response)=>res.json()); //back-end returns JSON-object containing the newly created TaskObject



    }
    updateObject(taskObject: TaskObject):Observable<void>{ //creates a new taskobject on the backend
        let jsonString = JSON.stringify(taskObject);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers }); // Create a request option
      //  console.log(jsonString); //used as test to check the output in development
        return this.http.post('http://localhost:8888/simpleLaravelBack/public/api/updateObject',jsonString, options) //needs to return an observable in order to function
            .map((res:Response)=>res.json());



    }
    deleteObject(taskObject: TaskObject):Observable<void>{ //creates a new taskobject on the backend
        let jsonString = JSON.stringify(taskObject);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({ headers: headers }); // Create a request option
       // console.log(jsonString); //used as test to check the output in development
        return this.http.post('http://localhost:8888/simpleLaravelBack/public/api/deleteObject',jsonString, options) //needs to return an observable in order to function
            .map((res:Response)=>res.json());



    }


}
