import { Component,OnInit, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TaksItemComponent  implements OnInit{
@Input() task!: Task;

constructor() {

}
ngOnInit(): void {
  
}
}
