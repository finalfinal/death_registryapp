import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MorgueDetailsPage } from '../morgue-details/morgue-details';
//import { KinsmanPage } from '../Kinsman/Kinsman';
//import { NavParams } from 'ionic-angular/navigation/nav-params';

 
    
    @Component({
      selector: 'page-home',
      templateUrl: 'home.html'
    })
    export class HomePage {
    
      constructor(public navCtrl: NavController, public navParams: NavParams) { 

      }
      nextPage(){
       // this.navCtrl.push(KinsmanPage);
        this.navCtrl.push(MorgueDetailsPage);
      }
    
    }
    




