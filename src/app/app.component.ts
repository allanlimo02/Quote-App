import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {name:'Allan', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)}
  ];
  
}
