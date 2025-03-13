import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-cipok',
  standalone: false,
  templateUrl: './cipok.component.html',
  styleUrl: './cipok.component.css'
})
export class CipokComponent {

  cipok: any[] = [];
  keresoSzo:any = "";
  szurtMeret: string = "";
  szurtMarka: string = "";
  szurtSzin: string = "";

  meretek: string[] = [];
  markak: string[] = [];
  szinek: string[] = [];
  rendezesTomb=["Alapértelmezett","Olcsók elől","Drágák elől"];
  rendezesAllapot=1;

  constructor(private base:BaseService, private search:SearchService) { 
    this.getCipok();
    this.search.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    );
  }

  getCipok() {
    this.base.getProducts().subscribe((data:any) => {
      this.cipok = data.cipok
      this.extractFilters()
    });
  }

  extractFilters() {
    this.markak = [...new Set(this.cipok.map(cipo => cipo.marka))];
    this.szinek = [...new Set(this.cipok.map(cipo => cipo.szin))];
    this.meretek = [...new Set(this.cipok.flatMap(cipo => cipo.meret))].sort((a, b) => a - b)
  }

  szurtCipok() {
    return this.cipok.filter(cipo => {
      return (!this.szurtMeret || cipo.meret.includes(Number(this.szurtMeret))) &&
              (!this.szurtMarka || cipo.marka === this.szurtMarka) &&
              (!this.szurtSzin || cipo.szin === this.szurtSzin)
    })
  }

  onKeyUp(event:any){
    console.log(event.target.value)
    this.search.setSearchWord(event.target.value)
  }

  RendezesIranyValt(){
    this.rendezesAllapot=(this.rendezesAllapot==2?0:++this.rendezesAllapot)
    if (this.rendezesAllapot==0) this.rendezesAllapot=1
  }
}
