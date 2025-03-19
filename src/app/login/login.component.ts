import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email=""
  password=""
  emailPassError=false
  emailPassMessage=""

  constructor(private auth:AuthService, private router:Router){}

  googleAuth(){
    this.auth.googleAuth()
      .then(
        ()=>
          {
            console.log("Beléptél Google-val!")
            this.router.navigate(['spiders'])
          }
    )

      .catch(()=>console.log("Hiba a Google belépésnél!"))
  }

  signIn(){
    console.log(this.email,"; ",this.password)
    this.auth.signInMailPassword(this.email, this.password).then(
      ()=>this.router.navigate(["spiders"])
    ).catch(
      (e)=>{
        if (e.code!=4002){
          this.emailPassError=true
          this.emailPassMessage=e
        }else{
          this.router.navigate(["spiders"])
        }

      }
    )

  }

  forgotPassword(){
    this.auth.forgotPassword(this.email)
  }
}