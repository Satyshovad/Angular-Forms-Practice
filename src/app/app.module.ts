import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1ModelDrivenFormsComponent } from './task1-model-driven-forms/task1-model-driven-forms.component';
import { Task2TemplateDrivenFormsComponent } from './task2-template-driven-forms/task2-template-driven-forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Task1ModelDrivenFormsComponent,
    Task2TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
