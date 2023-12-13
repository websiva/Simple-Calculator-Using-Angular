import { Component } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.scss']
})
export class CalciComponent {

  
  num1: string = '';
  num2: string = '';
  res: string = '';
  OpClicked: boolean = false;
  selOperator = '';
  display: string = ''; 

  NumClick(val: any) {
    if (this.OpClicked == false) {
      this.num1 += val
      this.display = this.num1
    }
    else {
      this.num2 += val
      this.display = this.num2
    }
  }
  OptClicked(val: any) {
    this.OpClicked = true;
    this.display = this.num1 + val;
    this.selOperator = val;
  }
  OptClick(){
    let n1 = parseFloat(this.num1);
    this.res = (n1/100).toString();
    this.selOperator="%";
    this.display = (this.num1) + (this.selOperator) + (this.num2) + "=" + this.res;
    this.num1 = this.res
    this.OpClicked = false;
    this.num2 = "";
  }

  byx() {
    let n1 = parseFloat(this.num1);
    let ans = 0;
    ans = 1 / n1;
    this.display = (ans.toFixed(2)).toString();
  }
  xsquare() {
    let n1 = parseFloat(this.num1);
    let ans = 0;
    ans = n1 * n1;
    this.display = "sqrt(" + this.num1 + ")=" + ans.toString();
  }
  sqrt() {
    let n1 = parseFloat(this.num1);
    let ans = 0;
    ans = Math.sqrt(n1);
    this.display = (ans.toFixed(2)).toString();
  }


  Equals() {
    let n1 = parseFloat(this.num1);
    let n2 = parseFloat(this.num2);
    if (this.selOperator == "+") {
      this.res = (n1 + n2).toString();
    }
    else if (this.selOperator == "-") {
      this.res = (n1 - n2).toString();
    }
    else if (this.selOperator == "*") {
      this.res = (n1 * n2).toString();
    }
    else if (this.selOperator == "/") {
      this.res = (n1 / n2).toString();
    }
    else if (this.selOperator == "%") {
      this.res = (n1/100).toString();
    }

    this.display = (this.num1) + (this.selOperator) + (this.num2) + "=" + this.res;
    this.num1 = this.res
    this.OpClicked = false;
    this.num2 = "";
  }

  clear() {
    this.display = "";
    this.num1 = "";
    this.num2 = "";
    this.OpClicked = false;

  }

}
