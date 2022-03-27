import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValue'
})
export class GetValuePipe implements PipeTransform {

  transform(value: object, key:string ): unknown {
    return value[key];
  }

}
