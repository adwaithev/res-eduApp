import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  marks:any
  constructor(private ds:DataService) {

    this.marks=this.ds.getmarks()
   }

  ngOnInit(): void {
  }

}
