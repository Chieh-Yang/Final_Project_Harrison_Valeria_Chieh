import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() title = "";
  @Input() cost = 0;
  @Input() description = "";
  @Input() url = "";

  @Output() buy = new EventEmitter();
}
