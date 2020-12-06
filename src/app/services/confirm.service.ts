import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConfirmService {
  confirmSubject: Subject<boolean> = new Subject();

  constructor() {}

  setConfirmation(confirm: boolean) {
    this.confirmSubject.next(confirm);
  }

  getConfirmSubject(): Subject<boolean> {
    return this.confirmSubject;
  }
}
