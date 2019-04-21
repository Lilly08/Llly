import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Compiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core/src/linker/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login () {
    const { username, password} = this
    try{

      const res = await this.afAuth.auth.signInWithEmailAndPassword(username +'@codedamn.com',password)
    } catch(err){
      console.dir(err)
      if (err.code =="auth/invalid-email"){
        console.log("User not found")
      }
    }
  }
}
