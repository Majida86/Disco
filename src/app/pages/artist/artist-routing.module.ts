import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {
    path: 'artists',
    component: IndexComponent
  },
  {
    path: 'artist',
    children: [
      {
        path: '',
        component: CreateComponent
      },
      {
        path: ':id',
        children: [
        {
          path: '',
          component: ReadComponent
        },
        {
          path:'edit',
          component: UpdateComponent
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
export class ArtistRoutingModule { }
