import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { UserResponse } from 'src/app/interfaces/user-response.interface';

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

}
