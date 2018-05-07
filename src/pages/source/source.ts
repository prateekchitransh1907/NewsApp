import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewsServiceProvider } from "../../providers/news-service/news-service";
import { Observable } from "rxjs/Observable";
import { LandingPage } from "../landing/landing";

/**
 * Generated class for the SourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-source',
  templateUrl: 'source.html',
})
export class SourcePage {
  abc: any[];
  id: any;
  playlist: any;
  name: any;

  sourceImgList: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public newsSource: NewsServiceProvider,
    public loadingCtrl: LoadingController,
    private newsService: NewsServiceProvider) {
    //Array containing the image list of the sources SS
    this.sourceImgList = [{ id: "abc-news", imgUrl: "http://s.abcnews.com/assets/images/apple-touch-icons/touch-icon-ipad-retina.png" },
    { id: "abc-news-au", imgUrl: "http://mobile.abc.net.au/homepage/mobile/images/homepage/apple-touch-icon-144x144.png" },
    { id: "aftenposten", imgUrl: "https://www.aftenposten.no/public/apple-touch-icon-120x120.png" },
    { id: "al-jazeera-english", imgUrl: "https://www.aljazeera.com/mritems/assets/images/touch-icon-iphone-retina.png" },
    { id: "ansa", imgUrl: "http://www.ansa.it/sito/img/ico/ansa-144-precomposed.png" },
    { id: "argaam", imgUrl: "https://www.argaam.com/apple-touch-icon-precomposed.png" },
    { id: "ars-technica", imgUrl: "http://cdn.arstechnica.net/apple-touch-icon.png" },
    { id: "ary-news", imgUrl: "https://arynews.tv/favicon/apple-icon-120x120.png" },
    { id: "associated-press", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/A-120.png" },
    { id: "australian-financial-review", imgUrl: "http://www.afr.com/etc/designs/ffx/afr/img/apple-touch-icon-144x144-precomposed.png" },
    { id: "axios", imgUrl: "https://assets.axios.com/icons-023b31e91db1f3ed6ba6184b3117b001/apple-touch-icon-120x120.png" },
    { id: "bbc-news", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/B-120-3091b8.png" },
    { id: "bbc-sport", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/B-120-3091b8.png" },
    { id: "bild", imgUrl: "https://bilder.bild.de/fotos/bild-de-35605834/Bild/3.bild.png" },
    { id: "blasting-news-br", imgUrl: "https://srs1.blastingcdn.com/images/apple-touch-icons/touch-icon-iphone-retina.png" },
    { id: "bleacher-report", imgUrl: "http://www.bleacherreport.com/img/favicon/appleTouchIcon.png" },
    { id: "bloomberg", imgUrl: "https://assets.bwbx.io/business/public/images/favicons/apple-touch-icon-120x120-ef3226f2bd.png" },
    { id: "breitbart-news", imgUrl: "http://www.breitbart.com/apple-touch-icon-152x152.png" },
    { id: "business-insider", imgUrl: "http://uk.businessinsider.com/apple-touch-icon-precomposed.png?r=US&IR=T" },
    { id: "business-insider-uk", imgUrl: "https://www.businessinsider.in/apple-touch-icon-precomposed.png?r=UK&IR=T" },
    { id: "buzzfeed", imgUrl: "https://www.buzzfeed.com/static-assets/img/touch-icon-ios_120.208a0e329cd6e8d831b21ae17fb6aabb.png" },
    { id: "cbc-news", imgUrl: "http://www.cbc.ca/apple-touch-icon.png" },
    { id: "cbs-news", imgUrl: "https://cbsnews4.cbsistatic.com/fly/bundles/cbsnewscore/apple-touch-icon.png?v=4cab257ced40f14903fe7d9c638e741782e3ba6b" },
    { id: "cnbc", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/C-120-fab715.png" },
    { id: "cnn", imgUrl: "https://cdn.cnn.com/cnn/.e/img/3.0/global/misc/apple-touch-icon.png" },
    { id: "cnn-es", imgUrl: "http://s2.wp.com/wp-content/themes/vip/cnnespanol/static/images/favicon/apple-touch-icon-120x120.png" },
    { id: "crypto-coins-news", imgUrl: "https://248qms3nhmvl15d4ne1i4pxl-wpengine.netdna-ssl.com/wp-content/uploads/fbrfg/apple-touch-icon.png?v=8j6Rkk2EwR" },
    { id: "daily-mail", imgUrl: "http://www.dailymail.co.uk/apple-touch-icon.png" },
    { id: "der-tagesspiegel", imgUrl: "https://www.tagesspiegel.de/images/apple-touch-icon/9800138/2-formatOriginal.png" },
    { id: "die-zeit", imgUrl: "https://img.zeit.de/static/img/ZO-ipad-114x114.png" },
    { id: "el-mundo", imgUrl: "http://e00-elmundo.uecdn.es/apple-touch-icon-120x120-precomposed.png" },
    { id: "engadget", imgUrl: "https://s.blogsmithmedia.com/www.engadget.com/assets-h59ede6fbe8fb47e0f6621b81814dc6b7/images/apple-touch-icon-120x120.png?h=232a14b1a350de05a49b584a62abac9e" },
    { id: "entertainment-weekly", imgUrl: "http://www.ew.com/img/favicons/favicon-120.png" },
    { id: "espn", imgUrl: "http://a.espncdn.com/wireless/mw5/r1/images/bookmark-icons/espn_icon-152x152.min.png" },
    { id: "espn-cric-info", imgUrl: "http://a.espncdn.com/wireless/mw5/r1/images/bookmark-icons/espncricinfo_icon-152x152.min.png" },
    { id: "financial-post", imgUrl: "http://1.gravatar.com/blavatar/b4ece3189893389a03f063830eacd95c?s=114" },
    { id: "financial-times", imgUrl: "https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&width=180&height=180&format=png" },
    { id: "focus", imgUrl: "https://p5.focus.de/mobile-bookmark-152x152.png" },
    { id: "football-italia", imgUrl: "https://www.football-italia.net/sites/all/themes/italia/logo2.png" },
    { id: "fortune", imgUrl: "http://1.gravatar.com/blavatar/dab01945b542bffb69b4f700d7a35f8f?s=114" },
    { id: "four-four-two", imgUrl: "https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/themes/fourfourtwo/images/apple-icon-144x144px.png" },
    { id: "fox-news", imgUrl: "http://global.fncstatic.com/static/orion/styles/img/fox-news/favicons/apple-touch-icon-120x120.png" },
    { id: "fox-sports", imgUrl: "https://b.fssta.com/sta/images/120x120.png" },
    { id: "globo", imgUrl: "https://s.glbimg.com/en/ho/static/touchphone/img/apple-touch-icon-iphone-retina.png" },
    { id: "google-news", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-ar", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-au", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-br", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-ca", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-fr", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-in", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-is", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-it", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-ru", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-sa", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "google-news-uk", imgUrl: "https://ssl.gstatic.com/news-static/img/1703439073-news-thumb-128_w.png" },
    { id: "goteborgs-posten", imgUrl: "https://icons.better-idea.org/icon?url=http://www.gp.se&size=70..120..200" },
    { id: "gruenderszene", imgUrl: "https://www.gruenderszene.de/apple-touch-icon.png" },
    { id: "hacker-news", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/Y-120-ff6600.png" },
    { id: "handelsblatt", imgUrl: "http://www.handelsblatt.com/images/apple-touch-icon/3896854/2-formatOriginal.png" },
    { id: "ign", imgUrl: "http://m.ie.ign.com/apple-touch-icon-precomposed.png" },
    { id: "il-sole-24-ore", imgUrl: "http://mobile.ilsole24ore.com/resources/img/touch/apple-touch-icon-120x120.png" },
    { id: "independent", imgUrl: "https://www.independent.co.uk/sites/all/themes/ines_themes/independent_theme/img/apple-icon-120x120.png" },
    { id: "infobae", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/I-120-f98900.png" },
    { id: "info-money", imgUrl: "http://www.infomoney.com.br/assets/images/touch-icon-iphone-retina.png" },
    { id: "la-gaceta", imgUrl: "http://www.lagaceta.com.ar/apple-touch-icon-114x114-precomposed.png" },
    { id: "la-nacion", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/L-120-006796.png" },
    { id: "la-repubblica", imgUrl: "http://www.repstatic.it/cless/main/nazionale/2016-v1/img/common/favicon/apple-touch-icon-120.png" },
    { id: "le-monde", imgUrl: "http://s1.lemde.fr/medias/web/1.2.705/ico/apple/icon-144.png" },
    { id: "lenta", imgUrl: "https://icdn.lenta.ru/lenta_touch.png" },
    { id: "lequipe", imgUrl: "https://www.lequipe.fr/elements/img/favicons/apple-touch-icon-120x120.png?140917" },
    { id: "les-echos", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/L-120-df1216.png" },
    { id: "liberation", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/L-120-e91845.png" },
    { id: "marca", imgUrl: "http://e00-marca.uecdn.es/apple-touch-icon-120x120-precomposed.png" },
    { id: "mashable", imgUrl: "https://mashable.com/apple-touch-icon-120x120.png?v=m2Pmw8zNwl" },
    { id: "medical-news-today", imgUrl: "https://cdn1.medicalnewstoday.com/favicon.png" },
    { id: "metro", imgUrl: "http://1.gravatar.com/blavatar/72ba1fb4e57339685f67d1d89b3db216?s=120" },
    { id: "mirror", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/M-120.png" },
    { id: "msnbc", imgUrl: "http://www.msnbc.com/sites/msnbc/themes/leanforward/images/apple-touch-icon-120x120.png" },
    { id: "mtv-news", imgUrl: "http://www.mtv.com/apple-touch-icon-precomposed.png" },
    { id: "mtv-news-uk", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/M-120-000000.png" },
    { id: "national-geographic", imgUrl: "https://www.nationalgeographic.com/etc/designs/platform/v2/images/apple-touch-icon.ngsversion.hY2aMSbG.png" },
    { id: "nbc-news", imgUrl: "https://www.nbcnews.com/apple-touch-icon-precomposed.png" },
    { id: "news24", imgUrl: "https://m.news24.com/favicon.ico" },
    { id: "new-scientist", imgUrl: "https://www.newscientist.com/wp-content/themes/new-scientist/img/layup/touch-icon/144x144.png" },
    { id: "news-com-au", imgUrl: "http://s.wp.com/wp-content/themes/vip/newscorpau-nca/assets/dist/img/common/favicon/apple-touch-icon-180x180.png" },
    { id: "newsweek", imgUrl: "http://s.newsweek.com/sites/www.newsweek.com/themes/newsweek/favicons/apple-touch-icon-120x120.png" },
    { id: "new-york-magazine", imgUrl: "http://cache.nymag.com/media/nymag/icon.120x120.png" },
    { id: "next-big-future", imgUrl: "https://www.nextbigfuture.com/wp-content/uploads/2017/04/ed85e288e0f5fe89658de9e9a0c1630c-150x150.png?x71037" },
    { id: "nfl-news", imgUrl: "https://www.nfl.com/apple-touch-icon.png?akmobile=ios&akcarrier=other" },
    { id: "nhl-news", imgUrl: "https://www-league.nhlstatic.com/nhl.com/builds/site-core/110a9c0469acd8a9fe4461c328c4d3263d2dcd2d_1523369315/images/iOS/apple-icon-144x144.png" },
    { id: "nrk", imgUrl: "https://static.nrk.no/kurator/front/apple-touch-icon.png" },
    { id: "politico", imgUrl: "https://static.politico.com/dims4/default/bd69088/2147483647/legacy_thumbnail/144x144/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fcf%2F05%2Fee684a274496b04fa20ba2978da1%2Fpolitico.png" },
    { id: "polygon", imgUrl: "https://cdn.vox-cdn.com/uploads/hub/sbnu_logo_minimal/405/touch_icon_ipad_retina_1000x1000.7014.png" },
    { id: "rbc", imgUrl: "https://s.rbk.ru/v8_top_static/common/common-8.5.79/mobile/apple-touch-icon-120x120.png" },
    { id: "recode", imgUrl: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/6397047/recode_favicon-180.0.png" },
    { id: "reddit-r-all", imgUrl: "https://www.redditstatic.com/mweb2x/favicon/120x120.png" },
    { id: "reuters", imgUrl: "https://s1.reutersmedia.net/resources_v3/images/favicon/apple-touch-icon-120x120.png" },
    { id: "rt", imgUrl: "https://russian.rt.com/static/blocks/touch-icon/apple-touch-icon-144x144-precomposed.png" },
    { id: "rte", imgUrl: "https://www.rte.ie/apple-touch-icon.png" },
    { id: "rtl-nieuws", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/R-120-31a6d8.png" },
    { id: "sabq", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/S-120-60c4fc.png" },
    { id: "spiegel-online", imgUrl: "http://m.spiegel.de/static/V2/logo/favicon/touch-icon120.png" },
    { id: "svenska-dagbladet", imgUrl: "https://assets.svd.se/assets/assets/images/favicon/apple-touch-icon-120x120.png" },
    { id: "t3n", imgUrl: "https://d1quwwdmdfumn6.cloudfront.net/t3n/2018/images/icons/t3n-apple-touch-120x120.png" },
    { id: "talksport", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/T-120-fff100.png" },
    { id: "techcrunch", imgUrl: "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180" },
    { id: "techcrunch-cn", imgUrl: "http://cdn.techcrunch.cn/wp-content/themes/vip/techcrunch-cn-2014/assets/images/homescreen_TCIcon_ipad_2x.png" },
    { id: "techradar", imgUrl: "https://vanilla.futurecdn.net/techradar/20180418/apple-touch-icon.png" },
    { id: "the-economist", imgUrl: "http://www.economist.com/assets/apple-touch-icon.png" },
    { id: "the-globe-and-mail", imgUrl: "https://www.theglobeandmail.com/resources/assets/meta/apple-touch-icon-120x120.png" },
    { id: "the-guardian-au", imgUrl: "https://assets.guim.co.uk/images/favicons/462584b4647d63f9b12063d513aad3e1/120x120.png" },
    { id: "the-guardian-uk", imgUrl: "https://assets.guim.co.uk/images/favicons/462584b4647d63f9b12063d513aad3e1/120x120.png" },
    { id: "the-hill", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/T-120-0250a5.png" },
    { id: "the-hindu", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/T-120-ffffff.png" },
    { id: "the-huffington-post", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/H-120-0dbc96.png" },
    { id: "the-irish-times", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/I-120.png" },
    { id: "the-lad-bible", imgUrl: "http://www.ladbible.com/assets/images/theme/favicons/apple-touch-icon-120x120.png" },
    { id: "the-new-york-times", imgUrl: "https://mobile.nytimes.com/vi-assets/static-assets/apple-touch-icon-319373aaf4524d94d38aa599c56b8655.png" },
    { id: "the-next-web", imgUrl: "https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/icons/apple-touch-icon-120x120.png?v=1524231391" },
    { id: "the-sport-bible", imgUrl: "http://www.sportbible.com/assets/images/theme/favicons/apple-touch-icon-120x120.png" },
    { id: "the-telegraph", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/T-120-1a151b.png" },
    { id: "the-times-of-india", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/I-120.png" },
    { id: "the-verge", imgUrl: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395359/ios-icon.0.png" },
    { id: "the-wall-street-journal", imgUrl: "https://s.wsj.net/media/wsj_apple-touch-icon-120x120.png" },
    { id: "the-washington-post", imgUrl: "https://www.washingtonpost.com/apple-touch-icon-precomposed.png" },
    { id: "time", imgUrl: "http://time.com/img/favicons/favicon-120.png" },
    { id: "usa-today", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/U-120-009bff.png" },
    { id: "vice-news", imgUrl: "https://vice-news-statics-cdn.vice.com/static/images/favicon-128.png" },
    { id: "wired", imgUrl: "https://www.wired.com/apple-touch-icon.png" },
    { id: "wired-de", imgUrl: "https://www.wired.de/theme/wired-2016/assets/images/favicons/android-chrome-192x192.png" },
    { id: "wirtschafts-woche", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/W-120-e30613.png" },
    { id: "xinhua-net", imgUrl: "http://www.xinhuanet.com/desk_icon.png" },
    { id: "ynet", imgUrl: "https://besticon-demo.herokuapp.com/lettericons/Y-120-cc0000.png" }];


    /*Calling the instance of news service provider to make the http request*/
    this.newsService.getSource()
      .map(response => response.json().sources)
      .subscribe(
      data => {
        this.abc = data;
      },
      error => console.log(error)
      );

  }
  ionViewWillEnter() {
    this.loader();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SourcePage');

  }
  /* function to map the corresponding images to the source names*/
  getImage(ab) {
    for (let source of this.sourceImgList) {
      if (source.id == ab.id) {
        return source.imgUrl;
      }
    }
  }

  /* function to  navigate to the next page*/
  getHeadlines(id, name) {
    this.navCtrl.push(LandingPage, { id: id, name: name })
  }

  /*loader function*/
  loader() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
}
