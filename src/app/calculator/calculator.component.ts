import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  inp1: number;
  inp2: number;
  result: number;
  symbol: string;
  count: number;

  ngOnInit() {
    this.symbol = `+`
    this.count = 0;
  }

  public OnClick(operationPerformed: string) {
    this.count = this.count + 1
    switch (operationPerformed) {
      case 'add':
        this.symbol = `+`
        this.result = this.inp1 + this.inp2;
        break;
      case 'minus':
        this.symbol = `-`
        this.result = this.inp1 - this.inp2;
        break;
      case 'multiply':
        this.symbol = `*`
        this.result = this.inp1 * this.inp2;
        break;
      case 'divide':
        this.symbol = `/`
        this.result = this.inp1 / this.inp2;
        break;
    }
  }

  public OnReset() {
    this.symbol = `+`;
    this.inp1 = this.inp2 = this.result = null;
  }

}
