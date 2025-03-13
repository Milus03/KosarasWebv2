import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-termek-editor',
  standalone: false,
  
  templateUrl: './termek-editor.component.html',
  styleUrl: './termek-editor.component.css'
})
export class TermekEditorComponent {
  termek: any = {
    nev: '',
    ar: null,
    marka: '',
    szin: '',
    meret: [],
    path: '',
    category: ''
  };
  kategoria: string = '';
  id: any = '';

  constructor(
    private route: ActivatedRoute,
    private crud: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.kategoria = this.route.snapshot.paramMap.get('category') || '';
    this.id = this.route.snapshot.paramMap.get('id') || '';
    
    if (this.kategoria && this.id) {
      this.crud.getTermek(this.kategoria, this.id).subscribe(data => {
        if (data) {
          this.termek = { ...data, category: this.kategoria };
        }
      });
    }
  }

  save(): void {
    this.crud.updateTermek(this.kategoria, this.id, this.termek).subscribe(() => {
      alert('Termék frissítve!');
      this.router.navigate(['/admin']);
    });
  }
}
