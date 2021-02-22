import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Tasks } from 'src/app/models/tasks/tasks.model';
// core components


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  taskArr:Tasks[]=[];
  
  constructor(private firestore:AngularFirestore){

  }
  ngOnInit() {
    this.firestore
    .collection("tasks")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.taskArr.push(<Tasks>(doc.data()));

      });
      console.log("task arr: ",this.taskArr);
    });

   }

   onEdit(){
     console.log("on edit clicked");


   }



}