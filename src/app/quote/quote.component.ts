import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1 ,'“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” ','Steve Jobs','Allan Limo',new Date(2020,3,19)),
    new Quote (2,'Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.', 'Lao-Tze','Mercy Kinyua',new Date(2022,3,19)),
    new Quote (3,'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.','Mary Kay Ash','Michelle Ngetich',new Date(2020,3,19)),
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
