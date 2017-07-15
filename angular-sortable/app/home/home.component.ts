import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styles: [require('./../app.component.css')],
})
export class HomeComponent implements OnInit {
  title: string = 'Technologies and their super-powers';
  body:  string = 'This is the home body';
  message: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }
}
