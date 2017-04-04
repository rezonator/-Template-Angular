import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'countArray'})
export class CountArrayPipe implements PipeTransform {
  
  transform(value: Array<any>, args: string[]): number {
      if(value == undefined || value == null || value.length == 0)
        return 0;
      return value.length;
  }
}