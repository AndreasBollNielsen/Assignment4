import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Assignment4';

  even: number[] = [];
  odd: number[] = [];

  //add even to array
  addEven(input: number) {
    this.even.push(input);

  }

  //add odd to array
  addOdd(input) {
    this.odd.push(input);
  }

  //recieve event & call Add/Odd methods
  distributeNumber(changedEvent: number) {


    if (changedEvent % 2 != 0)
    {
      this.addOdd(changedEvent);
    }
    else
    {
      this.addEven(changedEvent);

    }

  }
}
