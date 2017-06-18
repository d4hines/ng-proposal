import { Component, OnInit } from '@angular/core';

import { ISection } from './section';

@Component({
  selector: 'app-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.css']
})
export class SectionViewerComponent implements OnInit {
  sections: ISection[] = [
    {
      title: 'My Section Header',
      body: 'This section\'s body.'
    },
    {
      title: 'My Other Section Header',
      body: 'This section\'s body.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
