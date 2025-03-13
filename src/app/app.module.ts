import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { TermekekComponent } from './termekek/termekek.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';
import { MezekComponent } from './mezek/mezek.component';
import { CipokComponent } from './cipok/cipok.component';
import { PalankokComponent } from './palankok/palankok.component';
import { LabdakComponent } from './labdak/labdak.component';
import { PoszterekComponent } from './poszterek/poszterek.component';
import { SortPipe } from './sort.pipe';
import { KosarComponent } from './kosar/kosar.component';
import { RegisterComponent } from './register/register.component';
import { AszfComponent } from './aszf/aszf.component';
import { environment } from '../environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SpinComponent } from './spin/spin.component';
import { LoginComponent } from './login/login.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TermekEditorComponent } from './termek-editor/termek-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    TermekekComponent,
    UserComponent,
    AdminComponent,
    NavComponent,
    HomeComponent,
    SearchPipe,
    MezekComponent,
    CipokComponent,
    PalankokComponent,
    LabdakComponent,
    PoszterekComponent,
    SortPipe,
    KosarComponent,
    RegisterComponent,
    AszfComponent,
    SpinComponent,
    LoginComponent,
    TermekEditorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    TranslateModule.forRoot()
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private translate: TranslateService){
    translate.setDefaultLang('hu');
    translate.use('hu'); 
  }
}
