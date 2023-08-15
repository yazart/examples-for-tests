import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ComponentService {
  get(): Observable<unknown[]> {
    return of([1, 2, 3]);
  }

  create(data: unknown): Observable<boolean> {
    return of(true);
  }
}
