import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import{ AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  copassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
    ) { }

  ngOnInit() { 
  }

  async register(){
    const {username, password, copassword} = this
    if(password !== copassword){
      this.showAlert("Error:", "Password do not match")
      return console.error("Password do not match")
    }

    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username+ '@codedamn.com', password)
      console.log(res)
      this.showAlert("Success! Welcome,", username)
      this.router.navigate(['/tabs'])
    }catch(error){
      console.dir(error)
      this.showAlert("Error", error.message)
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create ({
      header,
      message,
      buttons: ["Ok"]
    })

    await alert.present()
  }
}
