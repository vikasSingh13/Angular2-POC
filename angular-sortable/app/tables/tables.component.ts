import {Component, OnInit, ElementRef} from '@angular/core';
import {StateService} from '../common/state.service';
var $ = require('jquery');
var dt = require('datatables.net');

@Component({
  selector: 'tables',
  template: require('./tables.component.html'),
  styles: [require('./../app.component.css')]
})

export class TableSortable implements OnInit {
  title: string = 'Sortable Table';
  body:  string = 'This is the Table body';
  message: string;

  rootNode : any;

  constructor(private _stateService: StateService, rootNode: ElementRef) { 
    this.rootNode = rootNode;
  }

  ngOnInit() {
    this.message = this._stateService.getMessage();
    var el = $(this.rootNode.nativeElement).find('.js-table')[0];
    $('.js-table').DataTable({
      "sAjaxDataProp":"data",
      "ajax": {
        "url": "app/tables/data/employees.json",
        "type": "GET"
      }
    });
  }
}
