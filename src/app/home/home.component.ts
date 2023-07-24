import { Component, Input, OnChanges, OnInit, SimpleChanges, numberAttribute } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  @Input({transform: numberAttribute}) id = 0;

  @Input() name = '';

  ngOnInit(): void {
    console.log(typeof(this.id), this.id);
    console.log(typeof(this.name), this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(typeof(this.id), this.id);
    console.log(typeof(this.name), this.name);
  }
}
