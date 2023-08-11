import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tqs',
  templateUrl: './tqs.component.html',
  styleUrls: ['./tqs.component.scss'],
})
export class TqsComponent implements OnInit {
  @Input() type: boolean = true;
  @Input() Tdata: any;
  @Input() passPercent: number = 100;
  ansStatus: boolean = false;
  noOfQuestion: number = -1;
  passMark: number = 0;
  totalScore: number = 0;
  getData(form: NgForm) {
    console.log(form.value);
  }
  ngOnInit(): void {
    // this.passMark = (this.passPercent / 100) * this.Tdata.length;
    this.Tdata.forEach((element: any) => {
      this.totalScore = this.totalScore + element.score;
    });
    console.log('Total Score : ', this.totalScore);
    this.passMark = (this.passPercent / 100) * this.totalScore;
  }
}
