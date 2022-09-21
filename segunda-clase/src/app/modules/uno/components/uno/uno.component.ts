import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  constructor(private compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.fillForm();

  }

  public fillForm(){
   

    let button = document.getElementById("btn1");
    button?.addEventListener("click",() => {
      this.compartidoService.name = "Brayan";
      this.compartidoService.email = "brayan@gmail.com";
      console.log("1-----------");
      console.log(this.compartidoService);
    })
  }

}
