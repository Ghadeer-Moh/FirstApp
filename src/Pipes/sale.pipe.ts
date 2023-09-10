import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale',
  pure:false
})
export class SalePipe implements PipeTransform {

  transform(value: number,...args: number[]): any {

    let transaction = args[0];
    let coupon = args[1];
    console.log(args)
    if ( transaction != undefined){
      let total = (value + transaction);
      if ( coupon != undefined){
      return Number (total - (total / 100 * coupon)) ;
    }
      else {
        return  total;
      }
    }

    return value;
  }

}
