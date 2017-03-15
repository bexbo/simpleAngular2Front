export class TaskObject {



    constructor(
        public id: number,
        public type: string,
        public values:{key:number, value:string}[],
        public others:{key:string, value:string}[]

        ){
        console.log(this.id)
    }

    getID(){
        return this.id;
    }
}
