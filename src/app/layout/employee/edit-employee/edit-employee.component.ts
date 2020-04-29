import { Component, OnInit } from '@angular/core';
import * as _ from '../../../shared/constants/constant';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  locations:string[] = _.locations;
  departments:string[] = _.departments;
  
  constructor() { }

  ngOnInit(): void {
  }

}
