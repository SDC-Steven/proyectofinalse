import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-return',
  templateUrl: './header-return.component.html',
  styleUrls: ['./header-return.component.scss'],
  
})
export class HeaderReturnComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
