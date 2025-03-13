import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-palankok',
  standalone: false,
  templateUrl: './palankok.component.html',
  styleUrl: './palankok.component.css'
})
export class PalankokComponent {

  keresoSzo:any = "";
  szurtMarka: string = "";
  szurtAnyag: string = "";

  markak: string[] = [];
  anyag: string[] = [];
  rendezesTomb=["Alapértelmezett","Olcsók elől","Drágák elől"];
  rendezesAllapot=1;
  palank: any[] = []
  constructor(private base:BaseService, private search:SearchService) {
    this.search.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    )
    this.getPalank()
  }

  getPalank() {
    return this.base.getProducts().subscribe((data:any) => {
      this.palank = data.palank
      this.extractFilters()
    })
  }

  extractFilters() {
    this.markak = [...new Set(this.palank.map(palank => palank.marka))];
    this.anyag = [...new Set(this.palank.map(palank => palank.anyag))];
  }

  szurtPalank() {
    return this.palank.filter(palank => {
      return (!this.szurtMarka || palank.marka === this.szurtMarka) &&
              (!this.szurtAnyag || palank.anyag === this.szurtAnyag)
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
