import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/games`).pipe(
      map((data) =>
        (data?.games as Array<any>).map(
          ({ title, photos, _id, rating, highlight }) => ({
            title,
            photo: (photos as Array<any>)?.[0]?.url,
            id: _id,
            rating,
            highlight,
          })
        )
      )
    );
  }

  getGame(id: string): Observable<any> {
    return this.http
      .get<any>(`${environment.BASE_URL}/games/${id}`)
      .pipe(map((data) => data?.game));
  }
}
