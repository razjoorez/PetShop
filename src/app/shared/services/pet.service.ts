import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPet } from '../../models/pet/IPet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  url =' https://petstore.swagger.io/';
  constructor(private http: HttpClient) { }

  createPet(pet: IPet): Observable<object> {
    return this.http.post('https://', pet);
  }

}
