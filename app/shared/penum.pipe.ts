import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'penum'})
export class PEnumPipe implements PipeTransform {
  
  statusMapper : {[key : number] : string} = {
    0 : "Low",
    1 : "Normal",
    2 : "High",
    3 : "Critical",
  };

  transform(value: number, args: string[]): string {
      if(value > 1)
        return "unknown";
      return this.statusMapper[value]  ;
  }
}
