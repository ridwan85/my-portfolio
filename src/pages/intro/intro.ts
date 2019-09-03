import { AdMobFreeBannerConfig, AdMobFree } from '@ionic-native/admob-free';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {


  // public info = new Array();
  public info = {
    "fullname": "Mohamad Ridwan Bin Abd Rahman",
    "dob": "11 DEC 1985",
    "ic": "920517-10-5553",
    "gender": "Male",
    "race": "Malay",
    "religion": "Islam",
    "nationality": "Malaysia",
    "status": "Single",
    "language": "Bahasa, English",
    "email": "rdwn.dev@gmail.com",
    "phone": "01132086314",
    "address": {
      "street": "Jalan PJU 10/1c",
      "street2": "Damansara Damai"
    },

    "education": {
      "Bachelor": {
        "title": "Bachelor in Computer Science",
        "place": "Universiti Putra Malaysia (UPM)",
        "major": "Software Engineering",
        "year": "2018",
        "cgpa": "3.xx"
      },
      "Diploma": {
        "title": "Diploma in Programming",
        "place": "Politeknik Sultan Idris Shah (PSIS)",
        "year": "2013",
        "cgpa": "3.59"
      },
      "SPM": {
        "title": "Sijil Pelajaran Malaysia",
        "place": "Sek. Men. Keb. Sultan Abdul Aziz Kuala Selangor",
        "year": "2009"
      }
    },
    "seminar": [{
      "title": "Mobile App Development Crash Course (Phonegap)",
      "conduct": "Conducted by Alumni of Computer Science UPM",
      "date": "26 November 2016",
      "img": "assets/phonegap.jpg"
    },
    {
      "title": "AWS Internet of Things Course (Hilti IOT Competition Program 2017)",
      "conduct": "Conducted by Hilti Instructor",
      "date": "19 November 2016",
      "img": "assets/hilti.jpeg"
    },
    {
      "title": "Joomla 3.0 Crash Course",
      "conduct": "Conducted by Caspian Technology.",
      "date": "23 January 2016",
      "img": "assets/joomla.jpg"
    },
    {
      "title": "Bootstrap Studio Training",
      "conduct": "Conducted by Nasrul Hazim from Cleanique Coders Resources",
      "date": "16 Januari 2016",
      "img": "assets/bootstrap.jpg"
    },
    {
      "title": "Certified in Industrial Level Java Web-Based Application",
      "conduct": "Conducted by MIMOS BHD",
      "date": "28 Oct - 29 Nov 2013",
      "img": "assets/mimos.jpeg"
    },
    {
      "title": "ComTIA A+ Certified CE.",
      "conduct": "Conducted by Prestariang",
      "date": "7 June 2013",
      "img": "assets/comptia.jpg"
    }
    ],
    "knowledge": {
      "computer": "C++ Programming, .Net Programming, Java Programming, Web Programming (HTML5, CSS, Javascript, PHP, JSP, MYSQL) including CMS like Wordpress, Joomla and Opencart. Familiar with Bootstrap framework and hybrid mobile app using Ionic Framework, Angular, React Native, Oracle Database, Rational CASE Tool, Adobe  Suite (Graphic & Audio) and Wireframe Tools",
      "personal": "Strive to consistently exceed expectations, remain cool under pressure, team player and multitasker, high energy level, self and highly motivated, commited to perfection, hardworking and can work in team."
    },
    "experience": [{
      "company": "Galeri Ilmu SDN BHD",
      "job": "Web Developer",
      "date": "2013-2014",
      "place": "Kota Damansara",
      "responsibility": [
        "Mantained and customized e-commerce website using opencart.",
        "Developed a back-end application that centralized book`s information so that every departments could access.",
        "Proposed and redesigned network topology of the company."
      ],
      "img": "assets/galeri.JPG"
    },
    {
      "company": "INPENS International College",
      "job": "Intern Programmer",
      "date": "Jan - Jun 2013",
      "place": "Kuala Selangor",
      "responsibility": ["Maintained college`s website"],
      "img": "assets/inpens.jpg"
    }
    ],
    "achievement": [
      "Semi Finalist on HILTI IOT Competition 2017",
      "GOLD Winner in 6th Human Computer Interaction Day (HCI Day 2016)",
      "Finalist in Final Year Project Competition Politeknik Sultan Idris Shah"
    ],
    "interest": [
      "Exploring new programming languages such as Angular, React Native, Ionic and many latest technology trends",
      "Following the latest trends and eager to participate in any continuing education opportunities that are available.",
      "Sharing knowledge by making a YouTube video on programming and help others on stakeoverflow.com"
    ],
    "references": [{
      "name": "Profesor Madya Masrah Azrifah Binti Azmi Murad",
      "title": "Academic Advisor",
      "department": "Department of Software Engineering and Information System",
      "uni": "University Putra Malaysia, Serdang, Selangor",
      "tel": "0389471739",
      "email": "masrah@upm.edu.my"
    },
    {
      "name": "Pn Norakma Bt. Nadzari",
      "title": "Academic Advisor",
      "department": "Department of Information Technology and Communication",
      "uni": "Politeknik Sultan Idris Shah, Sabak Bernam, Selangor",
      "tel": "019-3886583",
      "email": ""
    }
    ]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public adMobFree:AdMobFree) {
    // let localData = http.get('assets/resume.json')
    //   .map(res => res.json());
    // // .map(res => res.details);
    // localData.subscribe(data => {
    //   console.log(data.fullname);
    //   this.info = data;

    //   console.log(this.info);
    // })
    // let status bar overlay webview
    this.showBannerAd();
  }
  //ads
  async showBannerAd() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
        id:'ca-app-pub-8469816531943468/3705609592',
        isTesting: false,
        autoShow: true
      }

      this.adMobFree.banner.config(bannerConfig);

      const result = await this.adMobFree.banner.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }

//reset splash je, testing je
  resetStorage() {
    this.storage.clear();
    // this.navCtrl.setRoot(SplashPage)
  }

  //navigate to SeminarPage
  goSeminar(info) {
    this.navCtrl.push('SeminarPage', {
      'info': this.info
    });
  }

  //navigate to WorkPage
  goWork(info) {
    this.navCtrl.push('WorkPage', {
      'info': this.info
    });
  }
}