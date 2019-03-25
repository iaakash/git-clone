import { Observable } from "rxjs/Rx";
import { Injectable, Renderer2 } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn:'root'
})
export class ShowErrorService {
  private ERROR_STREAM_SUBJECT: Subject<any> = new Subject<any>();
  public ErrorStream$: Observable<any> = this.ERROR_STREAM_SUBJECT.asObservable();
  constructor(

  ) {

  }

  show() {
    this.curateAlert();
  }

  curateAlert() {
    this.ERROR_STREAM_SUBJECT.next({ status: true });
  }

  hide() {
    this.ERROR_STREAM_SUBJECT.next(null);
  }
}
