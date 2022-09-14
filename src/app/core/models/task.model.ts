export class Task{
    id!:number;
    title!:string;
    description!:string;
    priority!:number;
    startDate!:Date;
    endDate!:Date;
    advancement!:number;

    constructor(id:number, title:string, description:string, priority:number, startDate:Date, endDate:Date){
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.startDate = startDate;
        this.endDate = endDate;
        this.advancement = this.advancement;
    }
}