import { Component, Input, OnInit } from "@angular/core";
import { ConfirmService } from "../../../services/confirm.service";

@Component({
  selector: "app-confirm-popover",
  templateUrl: "./confirm-popover.component.html",
  styleUrls: ["./confirm-popover.component.scss"],
})

/* 
  Componente criado com o intuito de ser um popover geral para confirmar ações sensíveis do usuário,
  como editar uma amostra de glicemia ou excluir. Ele usa o confirmservice para se comunicar com outros
  componentes, pq o popover acaba sendo um componente que não tem relação direta (pai e filho) com ninguem.
*/
export class ConfirmPopoverComponent implements OnInit {
  @Input() message: string;

  constructor(private confirmService: ConfirmService) {}

  // manda a escolha do usuário para o service, e esse por sua vez altera o Subject, e o Subject por
  // sua vez notifica todos seus observers com a escolha do usuário
  setConfirmation(confirm: boolean) {
    this.confirmService.setConfirmation(confirm);
  }

  ngOnInit() {}
}
