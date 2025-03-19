import { Component, inject } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  komponensek: any[] = []
  link: any[] = []
  keresoSzo=""
  isBlack:boolean = false
  loggedUser:any
  sub?:Subscription
  isAdmin:boolean=false

  constructor(private base:BaseService, private search:SearchService, public router:Router, private auth:AuthService) { 
    this.getKomponens()
    this.getPath()
    this.search.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    )
    this.getUser()
  }

  getUser(){
    this.auth.getLoggedUser().subscribe(
      (user)=>this.loggedUser=user
    )
  }

  ngOnInit(): void {
    this.sub = this.auth.getCurrentUser().subscribe(
      (user) => {
        this.loggedUser = user
        this.auth.getIsAdmin().subscribe((isAdmin) => {
          this.isAdmin = isAdmin
        })
      }
    )
  }

  ngOnDestroy(): void {  
    this.sub?.unsubscribe()
  }

  logout(){
    this.auth.signOut()
      .then(()=>console.log("Kiléptél!"))
      .finally(() => this.router.navigate(['/login']))
      .catch(()=>console.log("Hiba a kilépésnél!"))
  }

  setKeresoSzo(){
    this.search.setSearchWord(this.keresoSzo)
  }

  onKeyUp(event:any){
    this.search.setSearchWord(event.target.value)
  }

  getKomponens() {
    this.base.getProducts().subscribe((data:any) => 
    this.komponensek = data.komponensek)
  }

  getPath(){
    this.base.getProducts().subscribe((data:any) => 
      this.komponensek = data.komponensek)
  }

  switch(){
    var element = document.body
    element.classList.toggle("dark-mode")
    this.isBlack = true
  }

  userIsAdmin(){
    return this.auth.getIsAdmin()
  }
}