import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoveMoneyPage } from './move.money.page';
import { MoveMoneyRoutingModule } from './move.money.routing.modulte';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MoveMoneyRoutingModule
  ],
  declarations: [MoveMoneyPage]
})
export class MoveMondyModule {
  
}
