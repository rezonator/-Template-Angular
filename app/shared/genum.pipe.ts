import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'genum'})
export class GEnumPipe implements PipeTransform {
  
  statusMapper : {[key : number] : string} = {
    0 : "Male",
    1 : "Female"
  };

  transform(value: number, args: string[]): string {
      if(value > 1)
        return "unknown";
      return this.statusMapper[value]  ;
  }
}