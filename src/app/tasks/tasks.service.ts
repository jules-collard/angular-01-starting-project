import { computed, Injectable, signal } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTaskData, Task } from "./task/task.model";

@Injectable({providedIn: 'root' })
export class TasksService {
    tasks = signal<Task[]>(dummyTasks);

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.update(tasks => [...tasks, {
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date 
        }]);
    }

    removeTask(id: string) {
        this.tasks.update(
            tasks => tasks.filter(task => task.id !== id)
        );
    }
}