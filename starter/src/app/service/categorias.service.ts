import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaDto } from '../Dto/categoria.dto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

const catUrl = `${environment.apiUrl}/categoria`;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  constructor(private authService: AuthService,
    private http: HttpClient) { }

getAllCategory(): Observable<CategoriaDto[]> {
const requestOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json',
'Authorization': `Bearer ${this.authService.getToken()}`
})
};

return this.http.get<CategoriaDto[]>(`${catUrl}/all`, requestOptions);
}
}
