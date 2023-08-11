import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeForTest'
})
export class PipeForTestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}