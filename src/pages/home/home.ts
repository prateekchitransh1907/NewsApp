import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { SourcePage } from "../source/source";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

  }
  /*function to navigate to the next page*/
  openSources() {
    this.navCtrl.push(SourcePage);
  }
  /*function to stop the autoplaying of slides on the last slide*/
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex == 3) {
      this.slides.stopAutoplay();
    }
  }
}
