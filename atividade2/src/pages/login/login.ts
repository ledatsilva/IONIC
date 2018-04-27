import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public usuario: String
  public senha: String
  public resultado: String
  public formLogin: FormGroup
  constructor(
    public fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    navParams.get('user')
    navParams.get('pass')
      this.formLogin = fb.group({
        usuario: [null, [Validators.required]],
        senha: [null, [Validators.required]]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login(){
    if(this.usuario === 'unipam' && this.senha === '123'){
      let alert = this.alertCtrl.create(
        {
        title: 'BEM VINDO!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.push('FormularioPage')
            }
          }
        ]
        }
      );
      alert.present();
    } else{
      this.resultado = 'FALHOU LOGIN'
    }
  }
}
