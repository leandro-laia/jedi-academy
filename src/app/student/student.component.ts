import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jda-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() name: string = 'Luke'
  @Input() isJedi: boolean = true

  constructor() { }

  ngOnInit() {
  }

}
