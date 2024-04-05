import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
hobbies:string=""

allEmployee:any=[
  {
    empId:100,empName:"max",empSal:20000
  },
  {
    empId:101,empName:"vax",empSal:25000
  },
  {
    empId:102,empName:"cax",empSal:30000
  },
  {
    empId:103,empName:"pax",empSal:28000
  }
]

user:string=""
constructor(private ds:DataService){
  this.user=this.ds.loginUsername
}

}
