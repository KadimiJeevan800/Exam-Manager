import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dailog-box',
  templateUrl: './dailog-box.component.html',
  styleUrls: ['./dailog-box.component.scss'],
})
export class DailogBoxComponent {
  @Input() status: boolean = true;
  @Output() statusOfDailog = new EventEmitter<boolean>();

  closeModal() {
    this.statusOfDailog.emit(false);
    this.status = false;
  }
}
