import { PipeTransform, Pipe } from '@angular/core';



@Pipe({name: 'keys', pure:false}) //the pipe is not static/pure
export class KeysPipe implements PipeTransform { //is used to make key value pairs in object/dictionary iterable and readable
    transform(value:any, args:string[]) : any {
        let keys:any = [];
        for (let key in value) { //iterates over the object/dictionary
            keys.push({key: key, value: value[key]});
        }
        return keys;
    }
}