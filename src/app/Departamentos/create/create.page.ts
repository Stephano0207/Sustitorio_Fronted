import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DepartamentoService } from 'src/app/Services/departamento.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  imports:[CommonModule, FormsModule, IonicModule,RouterModule]
})
export class CreatePage implements OnInit {
  Desdepartamento:any;


  departamentos:any=[];

  constructor(private service:DepartamentoService) { }

  ngOnInit() {
    this.getAll();
  }

  ionViewWillEnter(){
    this.getAll();
  }


  getAll() {
    this.service.getAll().subscribe(
      (data) => {
        console.log("SUCESSS====", data)
        this.departamentos = data
      }
      , (error) => {
        console.log("Error====", error)
      });
  }

  registrar() {
    let data = {
      Desdepartamento: this.Desdepartamento,
    }

    this.service.create(data).subscribe((res: any) => {
      console.log("Success====", data);
      this.Desdepartamento="";
      this.getAll();
    }, (error: any) => {
      console.log("Error====", error)
    })
  }

  borrar(id: number) {
    this.service.delete(id).subscribe((res: any) => {
      console.log("BORRADO======", res);
      this.getAll();
    }, (error) => {
      console.log("ERROR======", error);
    }
    )
  }

}
