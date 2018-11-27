import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { UserResponse } from 'src/app/interfaces/user-response.interface';
import { DialogeditdeleteuserComponent } from '../dialogeditdeleteuser/dialogeditdeleteuser.component';
import { DialogCreateUserComponent } from '../dialog-create-user/dialog-create-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  rows = [];
  dataSource: UserResponse[];
  selected = [];

  constructor(private userService: UserService, private titleService: Title, private dialog: MatDialog,
    private data: DataTransferService) { }

  ngOnInit() {

    this.getUsers();
    this.titleService.setTitle('Usuarios');
  }

  getUsers(){
    this.userService.getAllUser().subscribe( usuarios => {
      this.dataSource = usuarios;
    }, error => {
      console.log(error);
    });
  }

  openDialogNewUser() {
    const dialogoNewProduct = this.dialog.open(DialogCreateUserComponent);

    dialogoNewProduct.afterClosed().subscribe(result => {
      this.getUsers();
      console.log(result);
    });

  }

  openDialogEditUser(id: number){
    console.log(id);
    this.data.changeId(String(id));
    const dialogEdit = this.dialog.open(DialogeditdeleteuserComponent);
    
  dialogEdit.afterClosed().subscribe(result =>{
    this.getUsers();
    console.log(result);
  });
  }
  onSelect({ selected }) {
    this.openDialogEditUser(selected[0].id);
}
}
