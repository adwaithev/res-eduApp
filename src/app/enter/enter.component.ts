import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  marksForm=this.fb.group({
    exam:[""],
    s1:[""],
    s2:[""],
    s3:[""],
    s4:[""],
    s5:[""]
  })

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  marks(){
    var exam=this.marksForm.value.exam;
    var s1=this.marksForm.value.s1;
    var s2=this.marksForm.value.s2;
    var s3=this.marksForm.value.s3;
    var s4=this.marksForm.value.s4;
    var s5=this.marksForm.value.s5;

    var result=this.ds.marks(exam,s1,s2,s3,s4,s5)
    if (result){
      alert("marks enterd")
      this.router.navigateByUrl("dashboard");
    }
  }

}
