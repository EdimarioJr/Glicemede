import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Sampling } from "../interfaces";

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
  ];
  // O Subject responsavel por fazer a transmissão de novos valores e comunicação entre componentes
  // sem relação direta;
  samplingsSubject: Subject<any> = new Subject();

  constructor() {}

  getAllSamplings(): Sampling[] {
    return this.samplings;
  }

  getOneSampling(id: number): Sampling {
    return this.samplings.find((sampling) => {
      return sampling.id === id;
    });
  }

  deleteSampling(id: number): any {
    const index = this.samplings.findIndex((sampling) => sampling.id === id);
    if (index !== -1) {
      this.samplings.splice(index, 1);
      return {
        ...MENSAGEMSUCESSO,
        samplings: this.samplings
      }
    } else {
      return {
        ...MENSAGEMERRO
      }
    }
  }

  getSubjectSampling(): Subject<any> {
    return this.samplingsSubject;
  }

  addSampling(sampling: any): void {
    if (sampling.value) {
      const { value, lastMeal, lastMealHour } = sampling;
      let id =
        Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1))) +
        Math.ceil(1);
      let fullDate = new Date().toLocaleString();
      let separatedDate = fullDate.split(" ");

      const [date, hour] = separatedDate;
      this.samplings = [
        ...this.samplings,
        { id, date, hour, value, lastMeal, lastMealHour },
      ];
      this.samplingsSubject.next({ ...MENSAGEMSUCESSO, date, hour, value, id });
    } else this.samplingsSubject.next({ ...MENSAGEMERRO });
  }
}
