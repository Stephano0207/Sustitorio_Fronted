import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }
  private  url="http://127.0.0.1:8000/api/departamentos";
  getAll(){
    return this.http.get(this.url);
  }

  find(id:any){
    return this.http.get(this.url+'/'+id);
  }
  delete(id:any){
    return  this.http.delete(this.url+'/'+id);

  }

  create(departamento:any){
    return this.http.post(this.url,departamento);
  }

  update(departamento:any,id:any){
    return this.http.put(this.url+"/"+id,departamento);
  }

  dataGraf(){

  }
}
