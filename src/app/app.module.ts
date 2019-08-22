import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SelectedComponent } from './selected/selected.component';
import { ShowComponent } from './show/show.component';
import { UnSelectedComponent } from './un-selected/un-selected.component';
import { ShowAllComponent } from './show-all/show-all.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SelectedComponent,
    ShowComponent,
    UnSelectedComponent,
    ShowAllComponent
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
