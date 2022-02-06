import { Component } from '@angular/core';
import { ExpenseService } from '../services/expence.service';
import { ModalController } from '@ionic/angular';
import { AddExpensePage } from '../modal/add-expense/add-expense.page';
import { Expense } from '../interfaces/Expense';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tabexpense.page.html',
  styleUrls: ['tabexpense.page.scss']
})
export class ExpensePage {
  dataReturned: Expense;
  constructor(public expenseService: ExpenseService, public modalController: ModalController) {}

  async ngOnInit() {
    await this.expenseService.loadSaved();
  }

   async openModal() {
    const modal = await this.modalController.create({
      component: AddExpensePage,
      componentProps: {
        "id": await this.expenseService.getNewId() + 1
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log(this.dataReturned);
        this.expenseService.save(this.dataReturned);
      }
    });

    return await modal.present();
  }
}
