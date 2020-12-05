import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

interface Sampling {
  date: String;
  value: Number;
  hour: String;
  lastMeal: String;
  lastMealHour: String;
}

interface ReturnOpMessage {
  success: boolean;
  message: String;
}

const MENSAGEMSUCESSO: ReturnOpMessage = {
  success: true,
  message: "Operação realizada com sucesso!",
};

const MENSAGEMERRO: ReturnOpMessage = {
  success: false,
  message: "Não pudemos concluir a operação!",
};

@Injectable({
  providedIn: "root",
})
export class SamplingService {
  samplings: Sampling[] = [
    {
      date: new Intl.DateTimeFormat("pt-BR").format(new Date()),
      value: 110,
      hour: "08:39",
      lastMeal: "arroz e feijão",
      lastMealHour: "15:30",
    },
  ];

  samplingsSubject: Subject<any> = new Subject();

  constructor() {}

  getAllSamplings(): Sampling[] {
    return this.samplings;
  }

  getSubjectSampling(): Subject<any> {
    return this.samplingsSubject;
  }

  addSampling(sampling: any): void {
    if (sampling.value) {
      const { value, lastMeal, lastMealHour } = sampling;
      let fullDate = new Date().toLocaleString();
      let separatedDate = fullDate.split(" ");

      const [date, hour] = separatedDate;
      this.samplings = [
        ...this.samplings,
        { date, hour, value, lastMeal, lastMealHour },
      ];
      console.log(this.samplings);
      this.samplingsSubject.next({ ...MENSAGEMSUCESSO, date, hour, value });
    } else this.samplingsSubject.next({ ...MENSAGEMERRO });
  }
}
