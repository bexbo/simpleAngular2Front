/**
 * Created by kamrat_benny on 2017-03-15.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class getService {
    constructor(private http: Http){

    }

    getPosts(){
        return this.http.get('http://localhost:8888/simpleLaravelBack/public/api/getObjects')
            .map(res => res.json());
    }
}