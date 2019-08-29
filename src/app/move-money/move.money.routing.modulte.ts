import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveMoneyPage } from './move.money.page';

const routes:Routes = [
    {
        path:'',
        component: MoveMoneyPage
    },
    {
        path:'image1',
        children:[
            {
                path:'',
                loadChildren:() =>
                import('../image1/image1.module').then(m => m.Image1Module)
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MoveMoneyRoutingModule {}