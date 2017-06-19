import { Component, OnInit } from '@angular/core';

import { ISection } from '../section';
import { SectionService } from '../section.service'

@Component({
  selector: 'app-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.css']
})
export class SectionViewerComponent implements OnInit {
  sections: ISection[];

  getSections() {
    this.sectionService.getSections()
      .subscribe(sections => this.sections = sections);
  }

  constructor(private sectionService: SectionService) { }

  ngOnInit() {
    this.getSections();
  }

}
