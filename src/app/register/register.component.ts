import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = this.fb.group({
    name: [''],
    rolno: [''],
    pswd: ['']
  })

  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }


  register() {
    var name = this.registerForm.value.name;
    var rolno = this.registerForm.value.rolno;
    var pswd = this.registerForm.value.pswd;
    var result=this.ds.register(name,rolno,pswd)

    if(result){
      alert("user created")
      this.router.navigateByUrl('')
    }
  }

}
