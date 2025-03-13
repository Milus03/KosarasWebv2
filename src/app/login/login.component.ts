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
  currentLang: any;
  email=""
  password=""
  emailPassError=false
  emailPassMessage=""

  constructor(
    private translate: TranslateService, 
    private auth: AuthService, 
    private router: Router
  ) {
    const en = {
      "LOGIN": {
        "TITLE": "Login",
        "EMAIL": "Email",
        "EMAIL_PLACEHOLDER": "Enter your email",
        "PASSWORD": "Password",
        "PASSWORD_PLACEHOLDER": "Enter your password",
        "SUBMIT": "Login",
        "REMEMBER_ME": "Remember me",
        "FORGOT_PASSWORD": "Forgot password?",
        "REGISTER": "Don't have an account? Register"
      }
    };

    const hu = {
      "LOGIN": {
        "TITLE": "Bejelentkezés",
        "EMAIL": "Email",
        "EMAIL_PLACEHOLDER": "Add meg a email címed",
        "PASSWORD": "Jelszó",
        "PASSWORD_PLACEHOLDER": "Add meg a jelszavad",
        "SUBMIT": "Bejelentkezés",
        "REMEMBER_ME": "Emlékezz rám",
        "FORGOT_PASSWORD": "Elfelejtetted a jelszavad?",
        "REGISTER": "Nincs még fiókod? Regisztrálj"
      }
    };

    translate.setTranslation('en', en, true);
    translate.setTranslation('hu', hu, true);
    translate.setDefaultLang('hu');
    translate.use('hu');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
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
  registerbtn(){
    this.router.navigate(["/register"])
  }

  forgotPassword(){
    this.auth.forgotPassword(this.email)
    console.log("send")
  }
}