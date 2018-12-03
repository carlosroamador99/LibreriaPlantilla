import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiarpass',
  templateUrl: './cambiarpass.component.html',
  styleUrls: ['./cambiarpass.component.scss']
})
export class CambiarpassComponent implements OnInit {
  oldpassword: string;
  password: string;
  confirmpassword: string;

  constructor(private passService: UserService, private router: Router) { }

  ngOnInit() {
  }

  comprobarPassword(): boolean{
    if(this.password === this.confirmpassword){
      return true;
    } else {
      return false;
    }
  }

  cambiarPassword() {
    console.log(this.oldpassword, this.password);
    this.passService.changePass(this.oldpassword, this.password).subscribe(result => {
      console.log(result);
      this.router.navigate(['/dashboard'])
    }, error => {
      console.log(error);
    });
  }

}
