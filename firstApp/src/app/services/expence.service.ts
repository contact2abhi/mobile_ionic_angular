import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { Expense } from '../interfaces/Expense';



@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  public expenses: Expense[] = [];
  private EXPENSE_STORAGE: string = 'myexpenses';

  constructor(private platform: Platform) {}

  public async loadSaved() {
    // Retrieve cached data
    const initial_data  = [{ id: 1, name: "bread", cost: 100 }, { id: 2, name: "butter", cost: 200.00, }];
    
    const  expenseList = await Storage.get({ key: this.EXPENSE_STORAGE });
    this.expenses = JSON.parse(expenseList.value) || initial_data;
  }

  public async save(exp: Expense) {
    // Retrieve cached data
    const expenseList = await Storage.get({ key: this.EXPENSE_STORAGE });
    if(expenseList.value) {
      this.expenses = [ ...JSON.parse(expenseList.value), exp];
    }
    else {
      this.expenses = [ exp ];
    }
    await Storage.set(
      { 
        key: this.EXPENSE_STORAGE,
        value: JSON.stringify(this.expenses)
      });
  }

  public async getNewId() {
    // Retrieve cached data
    const expenseList = await Storage.get({ key: this.EXPENSE_STORAGE });
    const expensees: Expense[] = JSON.parse(expenseList.value ? expenseList.value : "[]");
    return expensees.length;
  }
}
