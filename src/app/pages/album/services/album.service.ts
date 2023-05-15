import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private _album: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(
    private httpClient: HttpClient
  ) {}

  getAlbumsFromApi(): void
  {
    const url = "http://localhost:3000/albums";

    this.httpClient
    .get<any>(url)
    .subscribe((response: any) => {
      this._albums.next(response)
    });
  }

// getAlbums(): BehaviorSubject<any>
// {
//   return this.albums;
// }

getAlbumById(id: number): void
{
  const url = 'http://localhost:3000/albums/$(id)';
  this.httpClient
  .get<any>(url)
  .subscribe((response: any) => {
    this._album.next(response)
  });
}

get albums(): BehaviorSubject<any>
{
  return this._albums;
}

get album(): BehaviorSubject<any>
{
  return this._album;
}
}