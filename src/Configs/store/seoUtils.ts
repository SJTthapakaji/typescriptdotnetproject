import request from './../request';
import { ApiEndPoints } from './apiconfig';

interface ApiResponse {
    Data?: any;
    Message: string;
    Code: number;
    loading: boolean;
}
class SEOUtils {

    public defaultSettings: any;

    constructor() {


    }

    public PushPageInfo(seoMetaData: any) {
        // MetaTitle: string,
        // MetaKeyWords: string,
        // Image: string,
        // MetaDescription: string
        this.ChangeDom(seoMetaData);
        // let _window: any = window;
        // _window.gtag('config', 'G-2EH2BF12R9', {
        //     'page_title': document.title,
        //     'page_path': _window.location.pathname + _window.location.search
        // });

    }
    public ChangeDom(seoMetaData: any) {

        if (seoMetaData == null) return;
        let _document: any = document;
        document.head.innerHTML = document.head.innerHTML +seoMetaData
        // _document.title = seoMetaData.MetaTitle + " | Spark Car";

        // let metaTittle = document
        //     .getElementsByTagName('meta')
        //     .namedItem('title');
        // if (metaTittle == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'title');
        //     meta.setAttribute('content', seoMetaData.MetaTitle + " | Spark Car");
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     metaTittle.setAttribute('content', seoMetaData.MetaTitle + " | Spark Car");
        // }
        // let metaDescription = document
        //     .getElementsByTagName('meta')
        //     .namedItem('description');

        // if (metaDescription == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'description');
        //     meta.setAttribute('content', seoMetaData.MetaDescription);
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     metaDescription.setAttribute('content', seoMetaData.MetaDescription);
        // }


        // let metaImage = document
        //     .getElementsByTagName('meta')
        //     .namedItem('image');
        // if (metaImage == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'image');
        //     meta.setAttribute('content', "http://sparkcar.org" + seoMetaData.Image);
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     metaImage.setAttribute('content', "http://sparkcar.org" + seoMetaData.Image);
        // }

        // let ogmetaTittle = document
        //     .getElementsByTagName('meta')
        //     .namedItem('og:title');
        // if (ogmetaTittle == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'og:title');
        //     meta.setAttribute('content', seoMetaData.MetaTitle + " | Spark Car");
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     ogmetaTittle.setAttribute('content', seoMetaData.MetaTitle + " | Spark Car");
        // }
        // let ogFBID = document
        //     .getElementsByTagName('meta')
        //     .namedItem('fb:app_id');
        // if (ogFBID == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'fb:app_id');
        //     meta.setAttribute('content', "{fbappId}");
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     ogFBID.setAttribute('content', "{fbappId}");
        // }
        // let ogDescription = document
        //     .getElementsByTagName('meta')
        //     .namedItem('og:description');

        // if (ogDescription == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'og:description');
        //     meta.setAttribute('content', seoMetaData.MetaDescription);
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     ogDescription.setAttribute('content', seoMetaData.MetaDescription);
        // }
        // let ogtype = document
        //     .getElementsByTagName('meta')
        //     .namedItem('og:type');
        // if (ogtype == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'og:type');
        //     meta.setAttribute('content', "website");
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     ogtype.setAttribute('content', "website");
        // }

        // let oglocale = document
        //     .getElementsByTagName('meta')
        //     .namedItem('og:locale');
        // if (oglocale == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'og:locale');
        //     meta.setAttribute('content', "en-us");
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     oglocale.setAttribute('content', "en-us");
        // }
        // let ogimage = document
        //     .getElementsByTagName('meta')
        //     .namedItem('og:image');
        // if (ogimage == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'og:image');
        //     meta.setAttribute('content', "http://sparkcar.org" + seoMetaData.Image);
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     ogimage.setAttribute('content', "http://sparkcar.org" + seoMetaData.Image);
        // }
        // let ogurl = document
        //     .getElementsByTagName('meta')
        //     .namedItem('og:url');
        // if (ogurl == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'og:url');
        //     meta.setAttribute('content', window.location.href);
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     ogurl.setAttribute('content', window.location.href);
        // }
        // let twitterCard = document
        //     .getElementsByTagName('meta')
        //     .namedItem('twitter:card');
        // if (twitterCard == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'twitter:card');
        //     meta.setAttribute('content', "summary");
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     twitterCard.setAttribute('content', "summary");
        // }

        // let twittermetaTittle = document
        //     .getElementsByTagName('meta')
        //     .namedItem('twitter:title');
        // if (twittermetaTittle == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'twitter:title');
        //     meta.setAttribute('content', seoMetaData.MetaTitle + " | Spark Car");
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     twittermetaTittle.setAttribute('content', seoMetaData.MetaTitle + " | Spark Car");
        // }
        // let twittermetaDescription = document
        //     .getElementsByTagName('meta')
        //     .namedItem('twitter:description');

        // if (twittermetaDescription == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'twitter:description');
        //     meta.setAttribute('content', seoMetaData.MetaDescription);
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     twittermetaDescription.setAttribute('content', seoMetaData.MetaDescription);
        // }


        // let twittermetaImage = document
        //     .getElementsByTagName('meta')
        //     .namedItem('twitter:image');
        // if (twittermetaImage == undefined) {
        //     var meta = document.createElement('meta');
        //     meta.setAttribute('name', 'twitter:image');
        //     meta.setAttribute('content', "http://sparkcar.org" + seoMetaData.Image);
        //     document.getElementsByTagName('head')[0].appendChild(meta);
        // } else {
        //     twittermetaImage.setAttribute('content', "http://sparkcar.org" + seoMetaData.Image);
        // }
    }

}
export default new SEOUtils();