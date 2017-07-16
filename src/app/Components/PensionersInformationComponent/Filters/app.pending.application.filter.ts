/**
 * Created by Amila on 7/14/2017.
 */
import {Pipe, PipeTransform, Injectable} from '@angular/core';
@Pipe({
  name: 'pendingResultFilter',
  pure: false
})

@Injectable()
export class PendingResultFilter implements PipeTransform {
  transform(array: any[], query: string): any {
    if (query) {
      return array.filter(function(row) {
        let word = query.toLowerCase();
        let nic = row.NIC.toLowerCase();
        let id = row.id;

        if (nic.indexOf(word) > -1 || id == word) {
          return row;
        }
      })
    }
    return array;
  }
}
