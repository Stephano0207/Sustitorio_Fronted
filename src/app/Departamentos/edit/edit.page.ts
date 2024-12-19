import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DepartamentoService } from 'src/app/Services/departamento.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
   imports:[CommonModule, FormsModule, IonicModule]
})
export class EditPage implements OnInit {
  CodDepartamento:any;

  Desdepartamento:any;
  constructor(
    private service:DepartamentoService,
    private router:Router,
    private route:ActivatedRoute
  ) {

    this.route.params.subscribe((param:any)=>{
      this.CodDepartamento=param.id;
      this.service.find(this.CodDepartamento);
      console.log(this.CodDepartamento);

    })

  }

  ngOnInit() {
  }


  getAlumno(id:any){
    this.service.find(id).subscribe((res:any)=>{
      console.log("suceess",res)
      let departamento=res[0]
      this.CodDepartamento=departamento.id;
      this.Desdepartamento=departamento.Desdepartamento;
    },(error)=>{
      console.log("error",error)
    })
  }

  actualizar(){
    let data = {
      Desdepartamento: this.Desdepartamento,
    }

    this.service.update(data,this.CodDepartamento).subscribe((res:any)=>{
      console.log("UPDATE======",res)
      this.router.navigate(['/departamento/create']);
    })
  }

}
