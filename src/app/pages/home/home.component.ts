import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public paises:any[] = [];
  public numPaginas:number = 10;
  public pageSizeOptions:number[] = [5, 10, 25, 100];
  public desde:number = 0;
  public hasta:number = 10;
  constructor(
    private _servicePais:PaisService
  ) { }

  ngOnInit(): void {
    this._servicePais.totalPaises()
      .subscribe(result => {

        if(result){
          this.paises = result;
          console.log(this.paises);
        }else{
          console.log("Error en el servicio");
        }
      })
  }

  public cambiarPagina(e: PageEvent){

    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;

  }

}
