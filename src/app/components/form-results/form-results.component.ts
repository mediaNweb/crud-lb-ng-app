import { Component, OnInit, Input } from "@angular/core";
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

  @Input() id: string;

  constructor(
    public databaseService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.getResult();
    }
  }

  send(form: NgForm) {
    if (form.invalid) {
      SweetAlert.fire(
        "Warning",
        "Required Fields must be completed",
        "warning"
      );
      return;
    }
    if (this.id) {
      this.edit(form);
    } else {
      this.post(form);
    }
  }

  edit(form: NgForm) {
    this.databaseService.updateResults(form.value, this.id).subscribe(
      res => {
        console.log(res);
        SweetAlert.fire("Success", "Result updated successfully", "success");
        this.router.navigateByUrl("/");
      },
      err => {
        console.error(err);
      }
    );
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

  getResult() {
    this.databaseService.getResult(this.id).subscribe(
      (result: Results) => {
        this.results = result;
      },
      err => {
        console.error(err);
      }
    );
  }
}
