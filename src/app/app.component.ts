import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jda-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
    students : Student[] =
    [
       {name : 'Luke Skywalker', isJedi : true, temple : 'Coruscant' },
       {name : 'Han Solo', isJedi : false},
       {name : 'Leia', isJedi : false }
    ]


}
