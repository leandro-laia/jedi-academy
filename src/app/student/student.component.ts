import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jda-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student
  
  constructor() { }

  ngOnInit() {
  }

  clicked() : void {
    console.log(`Student : ${this.student.name}`)
  }

}
