import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
  imports:[CommonModule, FormsModule, IonicModule,RouterModule]
})
export class GraficoPage implements OnInit {
  chart:any;
  datos_ex:any=[];
  labels:any=[];
  data:any=[];
  constructor(private service:DepartamentoService) { }

  ngOnInit() {
    this.service.dataGraf().subscribe((res)=>{
      this.datos_ex=res;
      this.labels=this.datos_ex.map((e:any)=>e.Departamento);
      this.data=this.datos_ex.map((e:any)=>e.Cantidad);
      this.renderizarGrafico();
      console.log(this.datos_ex);
    },(err)=>console.log(err));
  }

  renderizarGrafico(){
    if (this.chart) {
      this.chart.destroy(); // Destruir el gráfico anterior si existe
    }
    const ctx = document.getElementById('ventasChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar', // Cambia a 'line' si prefieres un gráfico de líneas
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Cantidad total de empleados por departamento',
            data: this.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }
}
