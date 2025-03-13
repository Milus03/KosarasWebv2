import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  loggedUser: any;
  users: any;
  termekek: any[] = [];
  kategoria: string = 'cipok'; // Alapértelmezett kategória

  constructor(private auth: AuthService, private crud: CrudService, private router:Router) {
    this.auth.getLoggedUser().subscribe(
      (loggedUser) => {
        this.loggedUser = loggedUser;
        console.log('Users logged', this.loggedUser);
        if (this.loggedUser) this.auth.getUsers()?.subscribe(
          (users) => this.users = users
        );
      }
    );
  }

  ngOnInit(): void {
    this.loadTermekek();
  }

  setCustomClaims(uid: any, claims: any) {
    this.auth.setUserClaims(uid, claims)?.subscribe(
      () => console.log('Claims beállítás!')
    );
  }

  change(uid: any) {
    let tomb = this.users.filter(
      (elem: any) => elem.uid == uid
    );
    console.log(tomb);
    this.auth.setUserClaims(uid, tomb[0].claims)?.subscribe();
  }

  // Termékek betöltése az adott kategóriából
  loadTermekek(): void {
    this.crud.getTermekek(this.kategoria).subscribe(data => {
      this.termekek = data ? Object.entries(data).map(([key, value]: any) => ({ id: key, ...value })) : [];
    });
  }

  // Termék törlése
  deleteTermek(id: number): void {
    if (confirm('Biztosan törölni szeretnéd?')) {
      this.crud.deleteTermek(this.kategoria, id).subscribe(() => {
        this.loadTermekek();
      });
    }
  }

  editTermek(kategoria: string, id: number): void {
    if (kategoria && id) {
      this.router.navigate([`editor/${kategoria}/${id}`]);
    } else {
      console.error('Hibás paraméterek:', kategoria, id);
    }
  }
  
}