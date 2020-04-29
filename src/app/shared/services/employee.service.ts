import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL:string = environment.baseURL+"getAll";
  

  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get(this.baseURL);
  }

  getEmployees(){

  }

  getEmployeeById(id:number){

  }

  postEmployee(emp:Employee){

  }

  putEmployee(emp:Employee){

  }

  deleteEmployee(id:number){

  }

}
