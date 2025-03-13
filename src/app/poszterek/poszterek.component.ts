import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-poszterek',
  standalone: false,
  templateUrl: './poszterek.component.html',
  styleUrl: './poszterek.component.css'
})
export class PoszterekComponent {

  poszterek: any[] = [];
  keresoSzo:any = "";
  szurtMeret: string = "";

  meretek: string[] = [];
  rendezesTomb=["Alapértelmezett","Olcsók elől","Drágák elől"];
  rendezesAllapot=1;

  constructor(private base:BaseService, private search:SearchService) { 
    this.getposzterek();
    this.search.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    );
  }

  getposzterek() {
    this.base.getProducts().subscribe((data:any) => {
      this.poszterek = data.poszterek
      this.extractFilters()
    });
  }

  extractFilters() {
    this.meretek = [...new Set(this.poszterek.map(poszterek => poszterek.meret))]
  }

  szurtposzterek() {
    return this.poszterek.filter(poszterek => {
      return (!this.szurtMeret || poszterek.meret === this.szurtMeret)
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
