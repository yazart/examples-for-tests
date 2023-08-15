import { filter, Observable } from 'rxjs';

export function myAwesomeOperator<T>(
  filterValue: unknown
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) =>
    source.pipe(filter((x) => x !== filterValue));
}
