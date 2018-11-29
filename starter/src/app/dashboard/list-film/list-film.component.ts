import { Component, OnInit } from '@angular/core';
import { ResourceResponse } from 'src/app/interfaces/resource-response.interface';
import { MatDialog } from '@angular/material';
import { RecursosService } from 'src/app/service/recursos.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogNewResourceComponent } from '../dialog-new-resource/dialog-new-resource.component';
import { DataTransferService } from 'src/app/service/data-transfer.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {
  rows = [];
  selected = [];
  temp: ResourceResponse[];

  constructor(public dialog: MatDialog, private recService: RecursosService,private data: DataTransferService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.recService.getAllRecursos().subscribe(listProductos => {
      this.temp = listProductos;
      this.temp.forEach(element => {
        if(element.type.name === "Película"){
          this.rows.push(element);
        }
      });
      this.temp = this.rows;
    }, error =>  {
      console.log(error);
    });
  }

  openDialogNewProduct() {
    const dialogoNewProduct = this.dialog.open(DialogNewResourceComponent);

    dialogoNewProduct.afterClosed().subscribe(result => {
      this.getAllProducts();
      console.log(result);
    });

  }

  openDialogNewResource(id: number) {
    this.data.changeId(String(id));
    const dialogEdit = this.dialog.open(DialogComponent);

  dialogEdit.afterClosed().subscribe(result => {
    this.getAllProducts();
  }, error => {
    console.log(error);

  });
  }

  onSelect({ selected }) {
    this.openDialogNewResource(selected[0].id);
}
}
