import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/service/categorias.service';
import { CategoriaResponse } from 'src/app/interfaces/caretegory-response.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  
  rows=[];
  dataSource: CategoriaResponse[]; 
  selected = [];

  constructor(private catService: CategoriasService, private titleService: Title) { }

  ngOnInit() {
    this.getCategorias();
    this.titleService.setTitle('Categorias');
  }

  getCategorias(){
    this.catService.getAllCategory().subscribe( recursos => {
      this.dataSource = recursos;
    }, error => {
      console.log(error);
    });
  }
}
