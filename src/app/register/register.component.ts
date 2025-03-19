import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username=""
  email=""
  password=""
  passwordAgain=""

  emailPassError=false
  emailPassMessage=""

  constructor(private auth:AuthService, private router:Router){}

  googleAuth(){
    this.auth.googleAuth()
      .then(
        ()=>
          {
            console.log("Sikeres Google regiszráció!")
            this.router.navigate(['spiders'])
          }
    )

      .catch(()=>console.log("Hiba a Google belépésnél!"))
  }

  signUpMailPassword(){
    console.log(this.email,"; ",this.password)
    this.auth.signUpMailPassword(this.email, this.password)
  }

}
