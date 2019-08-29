import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Image1Component } from './image1.component';
import {ImageSuccessComponent} from './imge-success/image.success.component';
import { Imge1RoutingModule } from './image1.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Imge1RoutingModule
  ],
  declarations: [Image1Component,ImageSuccessComponent]
})
export class Image1Module {
  
}
