import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Image1Component} from './image1.component';
import {ImageSuccessComponent} from './imge-success/image.success.component';

const routes:Routes = [
    {
        path:'',
        component:Image1Component
    },
    {
        path:'success',
        component:ImageSuccessComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class Imge1RoutingModule {}