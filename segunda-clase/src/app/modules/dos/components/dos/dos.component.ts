import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  
  constructor(public compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.buttonUpdate();
  }

  getDataForm(){
    let name: HTMLInputElement = <HTMLInputElement> document.getElementById("nombre");
    
    let email:  HTMLInputElement =  document.getElementById("email") as HTMLInputElement;

    name.value = this.compartidoService.name;
    email.value = this.compartidoService.email;
    console.log(name,email);
    }

    buttonUpdate(){
      let btnUpdate = document.getElementById("btn2");
      btnUpdate?.addEventListener("click",() => {

        this.getDataForm();
      });
    }

}
