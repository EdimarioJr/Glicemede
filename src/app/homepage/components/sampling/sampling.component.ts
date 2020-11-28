import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampling',
  templateUrl: './sampling.component.html',
  styleUrls: ['./sampling.component.scss'],
})
export class SamplingComponent implements OnInit {
  @Input() date = '';
  @Input() hour = '';
  @Input() value = 0;
  constructor() { }

  ngOnInit() {}

}
