import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Increment, Reset, decrement } from '../store/counter.actions';
import { counterDataType } from '../store/counter.state';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  panelOpenState = false;

  constructor(private store: Store<{ count: counterDataType }>) {
    // console.log('');
  }

  storeCounter: number = 0;
  storeName: String = '';
  counterSub: Subscription | undefined;

  Inc() {
    this.store.dispatch(Increment());
  }

  Dec() {
    this.store.dispatch(decrement());
  }

  rest() {
    this.store.dispatch(Reset());
  }

  ngOnInit(): void {
    this.counterSub = this.store.select('count').subscribe((data) => {
      this.storeCounter = data.count;
      this.storeName = data.name;
    });
  }

  ngOnDestroy(): void {
    this.storeCounter = 0;
    this.store.dispatch(Reset());
    if (this.counterSub) {
      this.counterSub.unsubscribe();
      console.log('Unsubscribing ...');
    }
  }
}
