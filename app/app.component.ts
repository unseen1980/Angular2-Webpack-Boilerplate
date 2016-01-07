import {Component} from 'angular2/core';
import {TestInput} from './test-input';

@Component({
  selector: 'my-app',
  directives: [TestInput],
  templateUrl: 'main.html'
})
export class AppComponent { }
