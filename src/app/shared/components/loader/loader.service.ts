import { Observable } from "rxjs/Rx";
import { Injectable, Renderer2 } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn:'root'
})
export class LoaderService {
  private LOADER_STREAM_SUBJECT: Subject<any> = new Subject<any>();
  public LoaderStream$: Observable<any> = this.LOADER_STREAM_SUBJECT.asObservable();
  constructor(

  ) {

  }

  show() {
    this.curateAlert();
  }

  curateAlert() {
    this.LOADER_STREAM_SUBJECT.next({ status: true });
  }

  hide() {
    this.LOADER_STREAM_SUBJECT.next(null);
  }
}
