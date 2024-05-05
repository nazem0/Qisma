import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone:true
})
@Injectable({
  providedIn: 'root',
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, length: number = 30): string {
    console.log(value, value.length);

    return value.length <= 30 ? value : `${value.slice(0,length)}...`;
  }
}
