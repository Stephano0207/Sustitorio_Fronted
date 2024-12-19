import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
  imports:[CommonModule, FormsModule, IonicModule,RouterModule]
})
export class EditPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
