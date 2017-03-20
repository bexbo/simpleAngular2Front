export class TaskObject {
    type: String;
    id: number;
    values: Array<String>;
    other_values:Array<Object>;


    constructor(){
        this.values = new Array<String>();
        this.other_values = new Array<Object>();
    }


}
