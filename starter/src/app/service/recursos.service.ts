import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ResourceResponse } from '../interfaces/resource-response.interface';
import { ProductDto } from '../Dto/resource.dto';


const proUrl = `${environment.apiUrl}/recurso`;

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllRecursos(): Observable<ResourceResponse[]> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<ResourceResponse[]>(`${proUrl}/all`, requestOptions);
  }
  newP(dto: ProductDto) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.post(`${proUrl}/create`, dto, requestOptions);
  }
  edit(dto: ProductDto, id: number) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    return this.http.put(`${proUrl}/edit/${id}`, dto, requestOptions);
  }
}



