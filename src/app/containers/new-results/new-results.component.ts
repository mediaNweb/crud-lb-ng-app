import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new-results",
  templateUrl: "./new-results.component.html",
  styleUrls: ["./new-results.component.scss"]
})
export class NewResultsComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    console.log(this.id);
  }
}
