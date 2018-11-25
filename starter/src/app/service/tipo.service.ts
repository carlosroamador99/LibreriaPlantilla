import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { TipoDto } from '../Dto/tipo.dto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const tipUrl = `${environment.apiUrl}/tipo`;


@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private authService: AuthService,
    private http: HttpClient) { }

  getAll(): Observable<TipoDto[]> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.get<TipoDto[]>(`${tipUrl}/all`, requestOptions);
  }

}
