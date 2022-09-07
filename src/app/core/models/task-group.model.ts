import { TaskList } from "./task-list.model";

export class TaskGroup{                                                             //A eventuellement supprimer !!!!!!!!!!!!
    title!:string;
    taskLists!:TaskList[];

    constructor(title:string, taskLists:TaskList[]){
        this.title = title;
        this.taskLists = taskLists;
    }
}