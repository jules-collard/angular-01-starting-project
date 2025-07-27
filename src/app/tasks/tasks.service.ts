import { Injectable, signal } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTaskData, Task } from "./task/task.model";

@Injectable({providedIn: 'root' })
export class TasksService {
    tasks = signal<Task[]>(dummyTasks);
    
    constructor() {
        const tasks = localStorage.getItem('tasks')

        if (tasks) {
            this.tasks.update(() => JSON.parse(tasks))
        }
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.update(tasks => [...tasks, {
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date 
        }]);
        this.saveTasks()
    }

    removeTask(id: string) {
        this.tasks.update(
            tasks => tasks.filter(task => task.id !== id)
        );
        this.saveTasks()
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks()))
    }
}