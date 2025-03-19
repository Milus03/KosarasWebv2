import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(termekek: any[], keresoSzo: string): any {
    if (!termekek) return null;
    if (!keresoSzo) return termekek;

    return termekek.filter((elem) => {
      return elem.nev && elem.nev.toLowerCase().includes(keresoSzo.toLowerCase());
    });
  }

}
