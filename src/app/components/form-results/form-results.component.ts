import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Results } from "src/app/models/results";
import { DatabaseService } from "src/app/services/database.service";
import SweetAlert from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-results",
  templateUrl: "./form-results.component.html",
  styleUrls: ["./form-results.component.scss"]
})
export class FormResultsComponent implements OnInit {
  results: Results = new Results();

  constructor(
    public databaseService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  send(form: NgForm) {
    this.post(form);
  }

  post(form: NgForm) {
    this.databaseService.postResults(form.value).subscribe(
      res => {
        console.log(res);
        SweetAlert.fire("Success", "Result created successfully", "success");
        this.router.navigateByUrl("/");
      },
      err => {
        console.error(err);
      }
    );
  }
}
