import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Sampling } from "../interfaces";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";

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
  samplings: Sampling[] = [];
  // O Subject responsavel por fazer a transmissão de novos valores e comunicação entre componentes
  // sem relação direta;
  samplingsSubject: Subject<any> = new Subject();

  constructor(private firestore: AngularFirestore) {}

  getAllSamplings(): Observable<any> {
    // é um observable que vai notificar todas as mudanças na collection para quem der o subscribe
    // como opção adicional estou especificando que ele retorne o id do FIREBASE como "id"
    return this.firestore
      .collection("samplings")
      .valueChanges({ idField: "id" });
  }

  getOneSampling(id: string): Observable<any> {
    // Puxando um documento pelo seu id gerado automaticamente pelo firebase
    return this.firestore
      .collection("samplings", (ref) =>
        ref
          .where(firebase.default.firestore.FieldPath.documentId(), "==", id)
          .limit(1)
      )
      .valueChanges();
  }

  deleteSampling(id: string): any {
    if (id) {
      this.firestore.collection("samplings").doc(id).delete();
      return {
        ...MENSAGEMSUCESSO
      };
    } else {
      return {
        ...MENSAGEMERRO,
      };
    }
  }

  getSubjectSampling(): Subject<any> {
    return this.samplingsSubject;
  }

  addSampling(sampling: any): void {
    if (sampling.value) {
      const { value, lastMeal, lastMealHour, fasting } = sampling;
      let fullDate = new Date().toLocaleString();
      let separatedDate = fullDate.split(" ");

      const [date, hour] = separatedDate;
      // adicionando a amostra no firebase
      this.firestore.collection("samplings").add({
        value,
        date,
        hour,
        lastMeal,
        lastMealHour,
        fasting
      });
      this.samplingsSubject.next({ ...MENSAGEMSUCESSO });
    } else this.samplingsSubject.next({ ...MENSAGEMERRO });
  }
}
