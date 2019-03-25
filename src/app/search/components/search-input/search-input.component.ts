import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {
  
  @ViewChild('search') search: ElementRef;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onInput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const searchEl = this.search.nativeElement;
    
    const inputOnSearch$ = fromEvent(searchEl, 'input').pipe(
      tap((event:KeyboardEvent) => this.onInput.emit(event.target['value'])),
    ).subscribe();

    const EnterPressedOnSearch$ = fromEvent(searchEl, 'keydown').pipe(
      filter((event:KeyboardEvent) => event.code === 'Enter')
    )

    EnterPressedOnSearch$.subscribe(event => {
      this.onSearch.emit(searchEl.value);
    })
  }

}
