import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges{
 @Input() personInfo:any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes", changes);
  }
}
