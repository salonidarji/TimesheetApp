import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@Angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [DatePipe]
})
export class AddTaskComponent implements OnInit {

  form:FormGroup;
  myDate:any = new Date();
  constructor(private firestore: AngularFirestore,
    private datePipe: DatePipe,
    private router:Router
    ) { }

  

  ngOnInit(): void {
    this.form = new FormGroup({
      task_name: new FormControl(null),
      task_swon: new FormControl(null),
      task_category: new FormControl(null),
      task_hours: new FormControl(null)
  });
  }

  saveTask(){
    let fd = this.form.value;
    this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
    this.firestore.collection('tasks').add({
      task_name: fd.task_name,
      task_hours:fd.task_hours,
      task_category: fd.task_category,
      task_swon:fd.task_swon,
      task_leave:'false',
      task_date: this.myDate
  })
  .then(res => {
      console.log("add tasks done:",res);
      this.form.reset();
      this.router.navigateByUrl('/dashboard');
      
  })
  .catch(e => {
      console.log(e);
  })

  }
}
