import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public welcome:String='Welcome To My App!'
  public teste:String ='Start'
  constructor(public navCtrl: NavController){}
  Pagina2(){
    this.navCtrl.push('Pagina2Page');
    }
}
