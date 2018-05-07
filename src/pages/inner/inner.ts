import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the InnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inner',
  templateUrl: 'inner.html',
})
export class InnerPage {
  sourceId: any;
  selectedObject: any;
  abc: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http) {

    //getting the selected object using navParams
    this.selectedObject = this.navParams.get('selectedObject');
    this.sourceId = this.navParams.get('id');

    /* Changing the date format in day month year */
    var publishedDate = this.selectedObject.publishedAt.split('-');

    var year = publishedDate[0];
    var month = publishedDate[1];
    var day = publishedDate[2].slice(0, 2);

    if (month == '01') {
      month = 'Jan'
    }
    else if (month == '02') {
      month = 'Feb'
    }
    else if (month == '03') {
      month = 'Mar'
    }
    else if (month == '04') {
      month = 'Apr'
    }
    else if (month == '05') {
      month = 'May'
    }
    else if (month == '06') {
      month = 'Jun'
    }
    else if (month == '07') {
      month = 'Jul'
    }
    else if (month == '08') {
      month = 'Aug'
    }
    else if (month == '09') {
      month = 'Sept'
    }
    else if (month == '10') {
      month = 'Oct';
    }
    else if (month == '11') {
      month = 'Nov';
    }
    else {
      month = 'Dec'
    }

    this.selectedObject.publishedAt = day + ' ' + month + ' ' + year;
//changing the author value if it is null or empty or the name is too long 
    if (this.selectedObject.author === null || this.selectedObject.author === "") {
      this.selectedObject.author = 'Anonymous';
    }
    else if (this.selectedObject.author.length > 8) {
      this.selectedObject.author = this.selectedObject.author.slice(0, 9);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerPage');
  }

}
