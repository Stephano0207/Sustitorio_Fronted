import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


  constructor(private http:HttpClient) { }
  private  url="http://127.0.0.1:8000/api/empleados";
  getAll(){
    return this.http.get(this.url);
  }

  find(id:any){
    return this.http.get(this.url+'/'+id);
  }
  delete(id:any){
    return  this.http.delete(this.url+'/'+id);

  }

  create(empleado:any){
    return this.http.post(this.url,empleado);
  }

  update(empleado:any,id:any){
    return this.http.put(this.url+"/"+id,empleado);
  }
}
