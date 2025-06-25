import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError, timeout } from 'rxjs';

export interface Dog {
  id: number;
  breed: string;
  description: string;
  urlImage: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private http: HttpClient = inject(HttpClient);
  private baseUri: string = 'http//localhost:8082/dog';

  /* get dogs from api */
  getDogs(): Observable<Dog[]> {
    return this.http.get<any[]>(this.baseUri).pipe(
      timeout(3000),
      map((anyDataList) => anyDataList.map((any) => any as Dog)),
      catchError((err) => {
        console.log("error al obtener api data", err);
        return throwError(() => new Error("Error get api data"));
      })
    );
  }

  /* insert dogs into api */
  insertDog(dog: Dog): Observable<void> {
    return this.http.post<void>(this.baseUri, dog).pipe(
      timeout(3000),
      catchError(err => {
        console.log("error insert", err);
        return throwError(() => new Error("Error al insertar"))
      })
    );
  }

  /* delete dogs from api */
  deleteDog(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUri}/${id}`).pipe(
      timeout(3000),
      catchError(err => {
        console.log("error delete", err);
        return throwError(() => new Error("Error al eliminar"))
      })
    );

  }
}
