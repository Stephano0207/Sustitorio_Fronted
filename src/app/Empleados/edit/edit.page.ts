import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import { EmpleadoService } from 'src/app/Services/empleado.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
  imports:[CommonModule, FormsModule, IonicModule,RouterModule]
})
export class EditPage implements OnInit {

  Codempleado:any;

  Nomempleado:any;
  Apeempleado:any;
  CodDepartamento:any;
  Dirempleado:any;

  departamentos:any=[];
   constructor(
     private serviceDepart:DepartamentoService,
     private serviceEmple:EmpleadoService,
     private router:Router,
     private route:ActivatedRoute
   ) {

     this.route.params.subscribe((param:any)=>{
       this.Codempleado=param.id;
       this.serviceEmple.find(this.Codempleado);
       console.log(this.Codempleado);

     })

   }

   ngOnInit() {
    this.getAll();
  }

  ionViewWillEnter(){
    this.getAll();
  }


  getAll() {


      this.serviceDepart.getAll().subscribe(
        (data) => {
          console.log("SUCESSS====", data)
          this.departamentos = data
        }
        , (error) => {
          console.log("Error====", error)
        });
  }


   getAlumno(id:any){
     this.serviceEmple.find(id).subscribe((res:any)=>{
       console.log("suceess",res)
       let empleado=res[0]
       this.Codempleado=empleado.Codempleado;
       this.Nomempleado=empleado.Nomempleado;
  this.Apeempleado=empleado.Apeempleado;
  this.CodDepartamento=empleado.CodDepartamento;
  this.Dirempleado=empleado.Dirempleado;
     },(error)=>{
       console.log("error",error)
     })
   }

   actualizar(){
     let data = {


      Nomempleado:this.Nomempleado,
      Apeempleado:this.Apeempleado,
      CodDepartamento:this.CodDepartamento,
      Dirempleado:this.Dirempleado,
     }

     this.serviceEmple.update(data,this.Codempleado).subscribe((res:any)=>{
       console.log("UPDATE======",res)
       this.router.navigate(['/empleado/create']);
     })
   }


}
