import { Component, OnInit, Input } from "@angular/core";
import { Results } from "src/app/models/results";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  @Input() results: Results;

  constructor() {}

  ngOnInit(): void {}
}
