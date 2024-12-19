import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

  constructor(private service:UsuarioService, private router:Router) { }
   name:string="SU";
  password:string="SP";
  ngOnInit() {
  }
  iniciarSesion(){
    let data={
      name:this.name,
      password:this.password
    }

    this.service.login(data).subscribe((res:any)=>{
      console.log("INICIO DE SESION EXITOSO",res);
      this.router.navigate(["/alumnos/create"]);
    },
    (error:any)=>{
      console.log("Error===",error)
    }
  )
  }
}
