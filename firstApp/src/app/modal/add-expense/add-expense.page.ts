import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Expense } from '../../interfaces/Expense';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {

  expense: Expense;
  id: number;
  cost: string;
  name: string;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.id = this.navParams.data.id;
  }

  async closeModal() {
    console.log(this.name);
    this.expense = {
      id: this.id,
      name: this.name,
      cost: this.cost,
      date: new Date(),
      category_id: 0
    };
    await this.modalController.dismiss(this.expense);
  }

}
