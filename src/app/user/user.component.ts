import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Standard State Management:
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
 
  // get imagePath() {
  //   return 'assets/users/' + this.avatar
  // }
  
  // With signals:
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })
  
  onSelectUser() {}
}
