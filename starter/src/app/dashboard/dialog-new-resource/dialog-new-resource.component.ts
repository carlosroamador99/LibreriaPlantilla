import { Component, OnInit } from '@angular/core';
import { CategoriaDto } from '../../Dto/categoria.dto';
import { TipoDto } from '../../Dto/tipo.dto';
import { CategoriasService } from '../../service/categorias.service';
import { RecursosService } from '../../service/recursos.service';
import { TipoService } from '../../service/tipo.service';
import { MatDialogRef } from '@angular/material';
import { ProductDto } from '../../Dto/resource.dto';

@Component({
  selector: 'app-dialog-new-resource',
  templateUrl: './dialog-new-resource.component.html',
  styleUrls: ['./dialog-new-resource.component.scss']
})
export class DialogNewResourceComponent implements OnInit {
  
  title: string;
  autor: string;
  anyo: number;
  content: string;
  categoryId: number;
  typeId: number;
  categoria: CategoriaDto[];
  tipos: TipoDto[];
  constructor(private catService: CategoriasService, private tipService: TipoService,
    private prodService: RecursosService, public dialogRef: MatDialogRef<DialogNewResourceComponent>) { }

  ngOnInit() {
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
  }
  addProduct() {
    const dto = new ProductDto(this.title, this.autor, this.anyo, this.content, this.categoryId, this.typeId);

    this.prodService.newP(dto).subscribe(result => {
      console.log(this.typeId);
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }

  validateAnyo(): boolean {
    const anyoRegExpr = new RegExp('^[0-9]{0,}$');
    console.log(this.anyo);
    console.log(`Anyo: ${anyoRegExpr.test(String(this.anyo))}`);
    return anyoRegExpr.test(String(this.anyo));
  }
}
