import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./containers/main/main.component";
import { NewResultsComponent } from "./containers/new-results/new-results.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "new",
    component: NewResultsComponent
  },
  {
    path: "edit/:id",
    component: NewResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
