import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  
  private idSource = new BehaviorSubject('');
  currentId = this.idSource.asObservable();

  constructor() { }

  changeId(id: string) {
    this.idSource.next(id);
  }
  
}















