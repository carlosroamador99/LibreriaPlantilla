import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { UserService } from 'src/app/service/user.service';
import { MatDialogRef } from '@angular/material';
import { UserDto } from 'src/app/Dto/user.dto';

@Component({
  selector: 'app-dialogeditdeleteuser',
  templateUrl: './dialogeditdeleteuser.component.html',
  styleUrls: ['./dialogeditdeleteuser.component.scss']
})
export class DialogeditdeleteuserComponent implements OnInit {
    
    //cambiado cosas
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    notes: string;
    role: string;

  constructor(private data: DataTransferService, private userService: UserService,
        public dialogRef: MatDialogRef<DialogeditdeleteuserComponent>) {}

  ngOnInit() {
    this.data.currentId.subscribe(message => this.id = Number(message));
    
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUser().subscribe(listUsers => {
      listUsers.forEach(element => {
        if (element.id == this.id) {
          this.name = element.name;
          this.email = element.email;
          this.notes = element.notes;
          this.phone = element.phone;
          this.role = element.role;
        }
      });
    }, error =>  {
      console.log(error);
    });
  }
  editUser() {
    const dto = new UserDto(this.name, this.email, String(this.phone), this.password, this.notes);//password
    this.userService.editU(dto, this.id).subscribe(result => {
      console.log(this.name,this.email, this.notes, this.phone, this.role);
      console.log(result);
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }
  borrarUser(){
    this.userService.deleteUser(this.id).subscribe(recurso =>{
      this.getAllUsers();
      this.dialogRef.close(); 
    }, error => {
      console.log(error);
    });
  }

  updateUser(){
    
  }
}
