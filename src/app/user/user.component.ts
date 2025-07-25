import { Component, Output, input, output, computed, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Standard State Management:
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar
  // }
  
  // With signals:
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>()
  
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })
  
  onSelectUser() {
    this.select.emit(this.id())
  }
}
