import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: false
})
export class SortPipe implements PipeTransform {

  transform(termekek:any[],irany:number): any {

    if (!termekek) return null;
    if (irany==0) return null;
    termekek=termekek.sort(
      (a,b)=>{
        let x=Number(a.ar)-Number(b.ar)
        return irany==1?x:-x}
    )
    return termekek
  }

}
