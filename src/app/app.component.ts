import {Component, OnInit} from '@angular/core';
import {LogService} from "./log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public logService: LogService) {}

  ngOnInit(): void {
    this.logService.getApi();
  }



}
