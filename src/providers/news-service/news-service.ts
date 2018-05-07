import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the NewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsServiceProvider {


  constructor(public _http: Http) {
    console.log('Hello NewsServiceProvider Provider');

  }

/*Http GET request to get the list of sources*/
  getSource() {
    return this._http.get('https://newsapi.org/v2/sources?apiKey=8058da5d1180451d9f3dc654b0ef5e2a');
  }
/*Http GET request to get the list of headlines for the specific source*/
  getHeadlines(sourceId) {
    return this._http.get('https://newsapi.org/v2/top-headlines?sources=' + sourceId + '&apiKey=8058da5d1180451d9f3dc654b0ef5e2a');
  }
}
