import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DatatableModule } from "inn-datatable";

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, DatatableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
