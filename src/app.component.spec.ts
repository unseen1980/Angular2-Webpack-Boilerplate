import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { InputForm } from './form.component'
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent, InputForm], imports: [FormsModule] });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it(`should have as title 'Angular With Webpack'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular With Webpack');
  }));

});
