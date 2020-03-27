import { Component, OnInit, Input } from "@angular/core";
import { Results } from "src/app/models/results";
import Swal from "sweetalert2";
import { DatabaseService } from "src/app/services/database.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  @Input() results: Results;

  opt = false;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {}

  settings() {
    if (this.opt) {
      this.opt = false;
    } else {
      this.opt = true;
    }
  }

  delete(results: Results) {
    const id = results.id;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.databaseService.deleteResults(id).subscribe(
          res => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            location.reload();
          },
          err => {
            console.error(err);
          }
        );
      }
    });
  }
}
