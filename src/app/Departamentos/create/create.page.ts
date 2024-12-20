import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  imports:[CommonModule, FormsModule, IonicModule,RouterModule]
})
export class CreatePage implements OnInit {
  Desdepartamento:any;

  CodDepartamento:any;
  departamentos:any=[];

  myForm:FormGroup;

  constructor(
    private service:DepartamentoService,
    private fb:FormBuilder
  ) {
    this.myForm = this.fb.group({
      CodDepartamento: ['', [Validators.required, Validators.maxLength(2)]], // Máximo 2 caracteres
    });
  }

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
      CodDepartamento:this.CodDepartamento
    }
console.log(data)
    this.service.create(data).subscribe((res: any) => {
      console.log("Success====", data);
      this.Desdepartamento="";
      this.CodDepartamento="";
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
