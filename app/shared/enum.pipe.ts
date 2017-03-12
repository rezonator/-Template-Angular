import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'enum'})
export class EnumPipe implements PipeTransform {
  
  statusMapper : {[key : number] : string} = {
    0 : "Idle",
    1 : "In progress",
    2 : "Done"
  };

  transform(value: number, args: string[]): string {
      if(value > 2)
        return "unknown";
      return this.statusMapper[value]  ;
  }
}