import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { InnerPage } from "../inner/inner";
import { NewsServiceProvider } from "../../providers/news-service/news-service";


/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  sourceId: any;
  sourceName: any;
  title: any;
  abc: any[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    private newsService: NewsServiceProvider) {
    this.sourceName = this.navParams.get('name');
    this.sourceId = this.navParams.get('id');
    console.log(this.sourceName);

  }


  loader() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }


  ionViewWillEnter() {
    this.loader();
    /*hiding the back button*/
    this.viewCtrl.showBackButton(false);
    /*Calling the instance of news service provider to make the http request*/
    this.newsService.getHeadlines(this.sourceId)
      .map(response => response.json().articles) // <------
      .subscribe(
      data => {
        this.abc = data;
        for (var i = 0; i < this.abc.length; i++) {
          if (this.abc[i].author === null) {
            this.abc[i].author = 'Anonymous';
          }

        }
      },
      error => console.log(error)
      );
  }
  /*Navigate to the next page*/
  getNews(ab) {
    this.sourceId = this.navParams.get('id');
    console.log('inside news');
    this.navCtrl.push(InnerPage, { selectedObject: ab, id: this.sourceId });
  }

}
