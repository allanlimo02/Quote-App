import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1 ,'Allan','Chinua Achebe','We will die successfull',new Date(2020,3,19)),
    new Quote (2,'Mercy', 'Chinua Achebe','We will die successfull',new Date(2020,3,19)),
    new Quote (3,'Cellan','Chinua Achebe','We will die successfull',new Date(2020,3,19)),
    new Quote (4,'Michelle','Chinua Achebe','We will die successfull',new Date(2020,3,19))
  ];

    // 
    completeQuote(isComplete: boolean, index: number){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
    //Adding new goal
    add(quote){
      // let quoteLength = this.quotes.length;
      // quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
