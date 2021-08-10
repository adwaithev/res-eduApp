import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    rolno: [''],
    pswd: ['']
  })

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    var rolno =this.loginForm.value.rolno
    var pswd=this.loginForm.value.pswd
    var result=this.ds.login(rolno,pswd)

    if(result){
      alert("login successful")
      this.router.navigateByUrl("dashboard")
    }
  }

}
