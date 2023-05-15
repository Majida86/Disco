import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import { AlbumModule } from './album/album.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageModule,
    AlbumModule
  ]
})
export class PagesModule { }
