import {Component} from 'angular2/core';

@Component({
  selector: 'test-input',
  templateUrl: 'form.html'
})
export class TestInput {
model;
  onClick(val) {
    if (this.model !== '') {
      console.log(this.model);
      this.model = '';
    }
  }
}
