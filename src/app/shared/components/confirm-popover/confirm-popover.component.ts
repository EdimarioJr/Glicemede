import { Component, Input, OnInit } from "@angular/core";
import { ConfirmService } from "../../../services/confirm.service";

@Component({
  selector: "app-confirm-popover",
  templateUrl: "./confirm-popover.component.html",
  styleUrls: ["./confirm-popover.component.scss"],
})
export class ConfirmPopoverComponent implements OnInit {
  @Input() message: string;

  constructor(private confirmService: ConfirmService) {}

  setConfirmation(confirm: boolean) {
    this.confirmService.setConfirmation(confirm);
  }

  ngOnInit() {}
}
