import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Results } from "../models/results";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  private readonly URL: string = "http://localhost:3000/results";

  constructor(private http: HttpClient) {}

  getResults() {
    return this.http.get(this.URL);
  }

  postResults(results: Results) {
    return this.http.post(this.URL, results);
  }

  updateResults(results: Results, id: string) {
    return this.http.put(this.URL + `/${id}`, results);
  }

  deleteResults(id: string) {
    return this.http.delete(this.URL + `/${id}`);
  }

  getResult(id: string) {
    return this.http.get(this.URL + `/${id}`);
  }
}
