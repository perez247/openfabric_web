import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence'
})
export class SentencePipe implements PipeTransform {

  transform(value?: string, ...args: number[]): string {

    if (!value) { return '' }

    var length = args[0] ?? 200;

    if (value.length <= length) { return value; }

    return value.substring(0, length) + '...';

  }

}
