﻿import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})
export class AppComponent 
{
    name = 'Sample app Tom Jose angular 4';
    value1: Date = new Date();
}