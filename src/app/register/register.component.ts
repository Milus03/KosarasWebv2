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

  email: string = ''
  password: string = ''
  lastname: string = ''
  firstname: string = ''
  nickname: string = ''

  constructor(private auth:AuthService, private router:Router) { }

  register() {
    this.auth.signInMailPassword(this.email, this.password)
      .then(res => alert("Sikeres regisztráció!"))
      .finally(() => this.router.navigate(["/login"]))
      .catch(err => alert("Hiba történt!"))
  }

  registerWithGoogle() {
    this.auth.googleAuth()

  }
}
