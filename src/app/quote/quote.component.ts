import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {index:1 ,name:'Allan', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)},
    {index:2,name:'Mercy', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)},
    {index:3,name:'Cellan', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)},
    {index:4,name:'Michelle', author:'Chinua Achebe',quote:'We will die successfull',completeDate:new Date(2020,3,19)}
  ];

    // 
    completeQuote(isComplete: boolean, index: number){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
