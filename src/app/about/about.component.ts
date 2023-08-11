import { Component, OnInit } from '@angular/core';
import { Subject, of, Observable, map, reduce } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  
})
export class AboutComponent implements OnInit {
  subject$ = new Subject();
  obs1$ = of(1, 2, 3, 4);

  greet() {
    console.log(this.obs1$);
    this.obs1$.pipe(map((x) => x * 3)).subscribe((data) => {
      console.log('of : ', data);
    });
  }

  obs$ = new Observable((observer) => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    // observer.complete();
    observer.error('worng');
    observer.next('5');
  });
  ngOnInit() {
    this.greet();
    this.subject$.subscribe((val) => {
      console.log('Subject : ', val);
    });

    this.subject$.next('1');
    this.subject$.next('2');

    this.subject$.next('2');
    this.subject$.complete();

    this.obs$.subscribe((val) => {
      console.log('Observable : ', val);
    });
  }
}
