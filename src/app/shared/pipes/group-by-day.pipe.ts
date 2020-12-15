import { IfStmt } from "@angular/compiler";
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

    // Ordenando as amostras pelo horario
    daySamplings.forEach((daySampling) => {
      daySampling.samplings.sort((a: any, b: any) => {
        return hourToSecond(b.hour) - hourToSecond(a.hour);
      });
    });
    // Ordenando as samplings pela ordem crescente de seu dia;
    daySamplings.sort((a, b) => {
      return b.daySam - a.daySam;
    });

    return daySamplings;
  }
}
// Pega os segundos totais de um horario no formato HH:MM:SS
function hourToSecond(hour: string): number {
  let totalSeconds = 0;
  let arrayHour = hour.split(":").map((time) => Number(time));
  totalSeconds = arrayHour[0] * 3600;
  totalSeconds += arrayHour[1] * 60;
  totalSeconds += arrayHour[2];

  return totalSeconds;
}
