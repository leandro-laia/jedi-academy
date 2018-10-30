import { Component } from '@angular/core';

@Component({
  selector: 'jda-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
    luke = {name : 'Luke Skywalker', isJedi : true, temple : 'Coruscant' }
    han = {name : 'Han Solo', isJedi : false}
    leia = {name : 'Leia', isJedi : false }

}
