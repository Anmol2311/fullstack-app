import { Component, OnInit } from '@angular/core';
import * as _ from '../../../shared/constants/constant';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  locations: string[] = _.locations;
  departments: string[] = _.departments;
  constructor() { }

  ngOnInit(): void {
  }

}
