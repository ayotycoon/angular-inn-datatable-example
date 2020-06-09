import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UpperCasePipe } from '@angular/common';

import { AppComponent } from "./app.component";
import { DatatableModule } from "inn-datatable";

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, DatatableModule],
  declarations: [AppComponent],
    providers: [UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
