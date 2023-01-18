import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent {
   base = new FormControl();
   height = new FormControl();

   constructor() { }

   ngOnInit():void {

   }

   onClickCalcButton() {
    let base = Number(this.base.value);
    let height = Number(this.height.value);
    let area = this.calcArea(base, height);
    console.log(this.base.value);
   }

   calcArea(base: number, height: number) {
    return base * height / 2;
   }
}
