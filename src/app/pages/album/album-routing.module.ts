import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';

const routes: Routes = [

  {
    path: 'albums',
    component: IndexComponent
  },
  {
    path: 'album',
    children: [
      {
        path: '',
        component: CreateComponent
      },
      {
        path: ':id',
        children:[

          {
            path: 'edit',
            component: UpdateComponent
          },
          {
            path: 'delete',
            component: DeleteComponent
          }
        ]

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
