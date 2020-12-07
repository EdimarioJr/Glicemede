import { Pipe, PipeTransform } from "@angular/core";
import { Sampling } from "../../interfaces";

@Pipe({
  name: "groupByDay",
})
export class GroupByDayPipe implements PipeTransform {
  transform(samplings: Sampling[]): any {
    let daySamplings = [];
    samplings.forEach((sampling) => {
      let { date } = sampling;
      let day = Number(date.split("/")[0]);
      const indexDay = daySamplings.findIndex(
        (daySample) => daySample.daySam === day
      );
      if (indexDay !== -1) {
        daySamplings[indexDay].samplings.push(sampling);
      } else {
        daySamplings.push({
          daySam: Number(day),
          samplings: [sampling],
        });
      }
    });
    console.log(daySamplings);
    return daySamplings.reverse();
  }
}
