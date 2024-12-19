import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
   imports:[CommonModule, FormsModule, IonicModule]
})
export class EditPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
