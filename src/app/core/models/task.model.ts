export class Task{
    title!:string;
    description!:string;
    priority!:number;
    startDate!:Date;
    endDate!:Date;
    advancement!:number;

    constructor(title:string, description:string, priority:number, startDate:Date, endDate:Date){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.startDate = startDate;
        this.endDate = endDate;
        this.advancement = this.advancement;
    }
}