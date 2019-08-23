import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SelectedComponent } from './selected/selected.component';
import { UnSelectedComponent } from './un-selected/un-selected.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SelectedComponent,
    UnSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
