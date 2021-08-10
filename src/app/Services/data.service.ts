import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentacc = ""
  currentuser = ""

  constructor() {
    this.getDetails()
  }

  user: any = {
    1: { rolno: 1, name: "amal", password: "one", marks: [] },
    2: { rolno: 2, name: "vimal", password: "two", marks: [] }
  }

  saveDetails() {
    localStorage.setItem("user", JSON.stringify(this.user))
    if (this.currentuser) {
      localStorage.setItem("currentuser", JSON.stringify(this.currentuser))
    }
    if (this.currentuser) {
      localStorage.setItem("currentacc", JSON.stringify(this.currentacc))
    }
  }

  getDetails() {
    if(localStorage.getItem("user")){
      this.user=JSON.parse(localStorage.getItem("user")||"")
    }
    if (localStorage.getItem("currentuser")) {
      this.currentuser = JSON.parse(localStorage.getItem("currentuser") || "")
    }
    if (localStorage.getItem("currentacc")) {
      this.currentacc = JSON.parse(localStorage.getItem("currentacc")||"")
    }
  }



  getmarks() {
    return this.user[this.currentacc].marks
  }


  register(name: any, rolno: any, pswd: any) {

    let accDetails = this.user;

    if (rolno in accDetails) {
      alert("user exists please login");
      return false;
    } else {
      accDetails[rolno] = {
        rolno: rolno,
        name: name,
        password: pswd,
        marks: []
      }
      this.saveDetails();
      return true;
    }


  }

  login(rolno: any, password: any) {
    let accDetails = this.user;

    if (rolno in accDetails) {
      if (password == accDetails[rolno]["password"]) {
        this.currentacc = rolno;
        this.currentuser = accDetails[rolno]["name"];
        this.saveDetails();
        return true
      } else {
        alert("incorrect password");
        return false
      }
    } else {
      alert("invalid user")
      return false;
    }
  }

  marks(exam: any, s1: any, s2: any, s3: any, s4: any, s5: any) {

    let accDetails = this.user;
    accDetails[this.currentacc]["marks"].push({
      exam: exam,
      sub1: s1,
      sub2: s2,
      sub3: s3,
      sub4: s4,
      sub5: s5
    })
    this.saveDetails();
    return true;

  }


}