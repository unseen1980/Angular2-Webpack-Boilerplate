import { Component } from '@angular/core';

@Component({
  selector: 'test-input',
  templateUrl: 'test-input.html'
})
export class TestInput {
model: any;
  onClick() {
    if (this.model !== '') {
      console.log(this.model);
      this.model = '';
    }
  }
}
