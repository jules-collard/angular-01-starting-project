import { Component, input, computed, signal, inject } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = input.required<string>();
  name = input<string>();
  isAddingTask = signal<boolean>(false)
  private tasksService = inject(TasksService)

  selectedUserTasks = computed(() =>
    this.tasksService.tasks().filter((task) => task.userId === this.userId())
  )

  onStartAddTask() {
    this.isAddingTask.set(true)
  }

  onCloseAddTask() {
    this.isAddingTask.set(false)
  }
}

