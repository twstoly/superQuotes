import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    let now = new Date();
    var date =  now.getDate() + 31;
    let nowWithoutTime:any = new Date(now.getFullYear(), now.getMonth(), date);


    var dateDifference = Math.abs(nowWithoutTime - value)
    var dateDifferenceSeconds = dateDifference * 0.001;
    const seconds = 86400;

    let counter = Math.floor(dateDifferenceSeconds/seconds)

    if(counter >= 1 && value > nowWithoutTime){
      return(null);
    }else if(counter == 30){
      return ("You have jst posted a few seconds ago..")
    }else if(counter == 0){
      return ("This is the last Day: " + counter)
    }
    else{
      return ("The date passed: " + counter + " days ago");
    }
  }

}
