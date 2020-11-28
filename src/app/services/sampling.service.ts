import { Injectable } from "@angular/core";

interface Sampling {
  date: String;
  value: Number;
  hour: String;
}

interface ReturnOpMessage {
  success: Boolean;
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
    },
    {
      date: new Intl.DateTimeFormat("pt-BR").format(new Date()),
      value: 110,
      hour: "08:39",
    },
  ];

  constructor() {}

  getAllSamplings(): Sampling[] {
    return this.samplings;
  }

  addSampling(value: Number): ReturnOpMessage {
    if (value) {
      let fullDate = new Date().toLocaleString();
      let separatedDate = fullDate.split(" ");
      const [date, hour] = separatedDate;
      this.samplings = [...this.samplings, { date, hour, value }];
      return MENSAGEMSUCESSO;
    }
    return MENSAGEMERRO;
  }
}
