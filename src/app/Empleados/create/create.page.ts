import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import { DepartamentoService } from 'src/app/Services/departamento.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'], imports:[CommonModule, FormsModule, IonicModule,RouterModule]
})
export class CreatePage implements OnInit {
  Nomempleado:any;
  Apeempleado:any;
  CodDepartamento:any;
  Dirempleado:any;


  empleados:any=[];
  departamentos:any=[];
  constructor(private serviceEmpl:EmpleadoService,private serviceDepar:DepartamentoService) { }

  ngOnInit() {
    this.getAll();
  }

  ionViewWillEnter(){
    this.getAll();
  }


  getAll() {
    this.serviceEmpl.getAll().subscribe(
      (data) => {
        console.log("SUCESSS====", data)
        this.empleados = data
      }
      , (error) => {
        console.log("Error====", error)
      });

      this.serviceDepar.getAll().subscribe(
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

      Nomempleado:this.Nomempleado,
      Apeempleado:this.Apeempleado,
      CodDepartamento:this.CodDepartamento,
      Dirempleado:this.Dirempleado,
    }
console.log(data);
    this.serviceEmpl.create(data).subscribe((res: any) => {
      console.log("Success====", data);
      this.Nomempleado="";
      this.Apeempleado="";
      this.CodDepartamento="";
      this.Dirempleado="";
      this.getAll();
    }, (error: any) => {
      console.log("Error====", error)
    })
  }

  borrar(id: number) {
    this.serviceEmpl.delete(id).subscribe((res: any) => {
      console.log("BORRADO======", res);
      this.getAll();
    }, (error) => {
      console.log("ERROR======", error);
    }
    )
  }
}
