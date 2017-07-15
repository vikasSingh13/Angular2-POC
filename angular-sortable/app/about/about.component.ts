import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'about',
  template: require('./about.component.html'),
  styles: [require('./../app.component.css')],
})
export class AboutComponent implements OnInit{
  title: string = 'About Page';
  body:  string = 'This is the about page body';
  message: string;

  constructor(public _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

}
