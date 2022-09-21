import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  private _name: string = '';
  private _email: string = '' ; 

  constructor() { 
  }

  get name(){
    return this._name;
  }
  
  set name(name: string){
    this._name = name;
  }

  get email(){
    return this._email;
  }
  
  set email(email: string){
    this._email = email;
  }
}
