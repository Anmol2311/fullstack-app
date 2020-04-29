import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];
  constructor(private _service:EmployeeService) { }

  ngOnInit(): void {
    this._service.getData().subscribe(res => console.log(res));    
  }

  fetchEmployees(){
    
  }

  deleteEmp(empId:number){

  }

}
