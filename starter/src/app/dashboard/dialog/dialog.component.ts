import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RecursosService } from 'src/app/service/recursos.service';
import { DataTransferService } from 'src/app/service/data-transfer.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  private id: string;

  constructor(public dialog: MatDialog, private recursoService: RecursosService,private data: DataTransferService) {}

  ngOnInit() {
    this.data.currentId4EditResource.subscribe(message =>this.id = message);
    console.log(this.id);
  }

}
