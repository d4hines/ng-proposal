import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SectionViewerComponent } from './section-viewer/section-viewer.component';
import { SectionService } from './section.service'

@NgModule({
  declarations: [
    AppComponent,
    SectionViewerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
