import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./containers/main/main.component";
import { ResultComponent } from "./components/result/result.component";
import { NavComponent } from "./components/nav/nav.component";
import { NewResultsComponent } from "./containers/new-results/new-results.component";
import { FormResultsComponent } from "./components/form-results/form-results.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultComponent,
    NavComponent,
    NewResultsComponent,
    FormResultsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
