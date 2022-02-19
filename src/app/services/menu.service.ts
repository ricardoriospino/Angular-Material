import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient : HttpClient) { }

  getMenu(){
    return this.httpClient.get<Menu[]>('./assets/data/menu.json');
  }
}
