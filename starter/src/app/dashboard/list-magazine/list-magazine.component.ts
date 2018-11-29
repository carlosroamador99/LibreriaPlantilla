import { Component, OnInit } from '@angular/core';
import { DialogNewResourceComponent } from '../dialog-new-resource/dialog-new-resource.component';
import { ResourceResponse } from 'src/app/interfaces/resource-response.interface';
import { MatDialog } from '@angular/material';
import { RecursosService } from 'src/app/service/recursos.service';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { DialogComponent } from '../dialog/dialog.component';
import { load } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-list-magazine',
  templateUrl: './list-magazine.component.html',
  styleUrls: ['./list-magazine.component.scss']
})
export class ListMagazineComponent implements OnInit {
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
        if(element.type.name === "Revista"){
          this.rows.push(element);
        }
      });
      this.temp = this.rows;
    }, error =>  {
      console.log(error);
    });
  }

  openDialogNewResource() {
    const dialogoNewProduct = this.dialog.open(DialogNewResourceComponent);

    dialogoNewProduct.afterClosed().subscribe(result => {
      this.getAllProducts();
      console.log(result);
    });

  }

  openDialogEdit(id: number) {
    this.data.changeId(String(id));
    const dialogEdit = this.dialog.open(DialogComponent);

  dialogEdit.afterClosed().subscribe(result => {
    this.getAllProducts();
  }, error => {
    console.log(error);

  });
  }

  onSelect({ selected }) {
    this.openDialogEdit(selected[0].id);
}
}
