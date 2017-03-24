export class TaskObject { //is used to store and show the objects in angular
    type: String;
    num: number;
    values: Array<String>;
    other_values:Object;
    unique_id:number;


    constructor(){
        this.values = new Array<String>();
        this.other_values = {};
    }


}
