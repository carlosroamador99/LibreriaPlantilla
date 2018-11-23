import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RecursosService } from '../service/recursos.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  

  constructor(public dialog: MatDialog, private recursoService: RecursosService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30vw',
      data: {title: this, anyo: this, autor: this, content: this}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }


  ngOnInit() {
  }

}
