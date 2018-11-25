import { Component, OnInit } from '@angular/core';
import { RecursosService } from 'src/app/service/recursos.service';
import { ResourceResponse } from 'src/app/interfaces/resource-response.interface';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { DataTransferService } from 'src/app/service/data-transfer.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.scss']
})
export class ListResourceComponent implements OnInit {
  rows=[];
  dataSource: ResourceResponse[];
  constructor(private recursoService:RecursosService, private titleService: Title, private dialog: MatDialog,
     private data: DataTransferService) { }

  ngOnInit() {
    this.getResources();
    this.titleService.setTitle('Aportaciones');
  }

  getResources(){
    this.recursoService.getAllRecursos().subscribe( recursos => {
      this.dataSource = recursos;
    }, error => {
      console.log(error);
    });
  }

  openDialogEdit(id: string){
    console.log(id);
    this.data.changeId(id);
    const dialogEdit = this.dialog.open(DialogComponent);
    
  dialogEdit.afterClosed().subscribe(result =>{
    this.getResources();
    console.log(result);
  });
  }

}
