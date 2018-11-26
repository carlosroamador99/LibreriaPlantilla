import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RecursosService } from 'src/app/service/recursos.service';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { CategoriaDto } from 'src/app/Dto/categoria.dto';
import { TipoDto } from 'src/app/Dto/tipo.dto';
import { ResourceResponse } from 'src/app/interfaces/resource-response.interface';
import { TipoService } from 'src/app/service/tipo.service';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ProductDto } from 'src/app/Dto/resource.dto';
import { stringify } from '@angular/core/src/util';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  id: number;
  title: string;
  autor: string;
  anyo: number;
  content: string;
  category: CategoriaDto;
  categoryId: number;
  type: TipoDto;
  typeId: number;
  rows: ResourceResponse[];
  categoria: CategoriaDto[];
  tipos: TipoDto[];


  constructor(private data: DataTransferService, private recService: RecursosService,
    private catService: CategoriasService, private tipService: TipoService,
    public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit() {
    this.data.currentId.subscribe(message => this.id = Number(message));

    this.catService.getAll().subscribe(result => {
      this.categoria = result;
    }, error => {
      console.log(error);
    });
    this.tipService.getAll().subscribe(result => {
      this.tipos = result;
    }, error => {
      console.log(error);
    });

    this.getAllResources();
  }

  getAllResources(){
    this.recService.getAllRecursos().subscribe(listProductos => {
      listProductos.forEach(element => {
        if (element.id == this.id) {
          this.title = element.title;
          this.autor = element.autor;
          this.anyo = element.anyo;
          this.content = element.content;
          this.category = element.category;
          this.type = element.type;
          this.typeId = element.type.id;
          this.categoryId = element.category.id;
        }
      });
    }, error =>  {
      console.log(error);
    });
  }
  editResource() {
    const dto = new ProductDto(this.title, this.autor, this.anyo, this.content, this.categoryId, this.typeId);
    this.recService.edit(dto, this.id).subscribe(result => {
      console.log(result);
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }

  borrar(){
    this.recService.deleteResource(this.id).subscribe(recurso =>{
      this.getAllResources();
      this.dialogRef.close(); 
    }, error => {
      console.log(error);
    });
  }

  validatAnyo(): boolean {
    // tslint:disable-next-line:max-line-length
    const anyoRegExpr = new RegExp('/[^a-z ]\*([.0-9])*\d');
    console.log(`Anyo: ${anyoRegExpr.test(String(this.anyo))}`);
    return anyoRegExpr.test(String(this.anyo));
  }


  }

