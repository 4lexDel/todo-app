import { Injectable } from "@angular/core";
import { TaskGroup } from "../models/task-group.model";
import { TaskList } from "../models/task-list.model";
import { Task } from "../models/task.model";

@Injectable({
    providedIn: 'root'
  })
  export class TasksService {     
    taskLists:TaskList[] = [
      {
        title:"Liste Alex",
        tasks:[
          {
            title:"Angular front",
            description:"TODO une application repertoriant des todolist et plus encore...",
            priority:2,
            startDate:new Date(),
            endDate:new Date(),
            advancement:5,
          },
          {
            title:"NodeJS backend",
            description:"Une API stockant toutes les task et peut être plus encore (login...)",
            priority:3,
            startDate:new Date(),
            endDate:new Date(),
            advancement:80,
          }
        ]
      },
      {
        title:"Liste Lucille",
        tasks:[
          {
            title:"Refléchir au concours de nouvelles",
            description:"Reflexion au sujet de la rédaction d'une nouvelle sur le thème \"Malédiction\".",
            priority:1,
            startDate:new Date(),
            endDate:new Date(),
            advancement:20
          }
        ]
      }
    ]

    constructor(){

    }

    getTaskLists(): TaskList[]{
      return this.taskLists;
    }
  }