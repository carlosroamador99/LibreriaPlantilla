import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { UserResponse } from '../interfaces/user-response.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserDto } from '../Dto/user.dto';
import { PassDto } from '../Dto/pass.dto';

const userUrl = `${environment.apiUrl}/user`;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllUser(): Observable<UserResponse[]> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<UserResponse[]>(`${userUrl}/all`, requestOptions);
  }
  newU(dto: UserDto) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.post(`${userUrl}/create`, dto, requestOptions);
  }

  editU(dto: UserDto, id: number) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    return this.http.put(`${userUrl}/${id}`, dto, requestOptions);
  }

  deleteUser(id: number) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.delete(`${userUrl}/${id}`, requestOptions);
  }

  changePass(oldP:string, newP:string) {
    const dto = new PassDto(oldP, newP);
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.put(`${userUrl}/change/password`,dto , requestOptions);
  }
}
