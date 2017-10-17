import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [BrowserModule,FormsModule, CalendarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }