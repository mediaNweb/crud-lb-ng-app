import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "src/app/services/database.service";
import { Results } from "src/app/models/results";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  results: Results[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this.databaseService.getResults().subscribe(
      (results: Results[]) => {
        this.results = results;
      },
      err => {
        console.error(err);
      }
    );
  }
}
