import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = "https://mailthis.to/cqfd.qualite@gmail.com"

  constructor(private http: HttpClient) {
  }

  PostMessage(input: any) {
    return this.http.post(
      this.api,
      input,
      {responseType: 'text'}
    )
  }
}
