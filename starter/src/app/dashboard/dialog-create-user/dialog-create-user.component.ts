import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MatDialogRef } from '@angular/material';
import { UserDto } from 'src/app/Dto/user.dto';

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss']
})
export class DialogCreateUserComponent implements OnInit {

  id: number;
  name: string;
  email: string;
  password =  Math.random().toString(36).slice(-8);
  phone: string;
  notes: string;
  
  constructor(private userService: UserService, public dialogRef: MatDialogRef<DialogCreateUserComponent>) { }

  ngOnInit() {
  }

  createUser() {
    //this.password = Math.random().toString(36).slice(-8);
    console.log(this.password);
    const dto = new  UserDto(this.name, this.email,this.password, String(this.phone), this.notes);

    this.userService.newU(dto).subscribe(result => {
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }
  validateEmail(): boolean {
    const emailRegExpr = new RegExp('[a-zA-Z0-9-]{1,}@([a-zA-Z\.])?[a-zA-Z]{1,}\.[a-zA-Z]{1,4}');
    return emailRegExpr.test(this.email);
  }
}
