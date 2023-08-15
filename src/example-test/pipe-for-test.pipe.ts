import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeForTest',
})
export class PipeForTestPipe implements PipeTransform {
  transform(value: string): number {
    return isNaN(Number(value)) ? 0 : Number(value);
  }
}
