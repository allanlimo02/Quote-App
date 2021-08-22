import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {name:'Allan', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)},
    {name:'Allan', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)},
    {name:'Allan', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)},
    {name:'Allan', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
