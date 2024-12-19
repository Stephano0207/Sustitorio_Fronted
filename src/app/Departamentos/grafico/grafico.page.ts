import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
  imports:[CommonModule, FormsModule, IonicModule,RouterModule]
})
export class GraficoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
