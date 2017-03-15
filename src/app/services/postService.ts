/**
 * Created by kamrat_benny on 2017-03-15.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {TaskObject} from '../Model/taskobject';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class PostService {
    constructor(private http: Http){
    }

    getPosts():Observable<TaskObject[]>{
        return this.http.get('http://localhost:8888/simpleLaravelBack/public/api/getObjects')
            .map((res:Response) => res.json());

    }
}