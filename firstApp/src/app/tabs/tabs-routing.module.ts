import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'expense',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabexpense/tabexpense.module').then(m => m.ExpensePageModule)
          }
        ]
      },
      {
        path: 'imageGalary',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabimages/tabimages.module').then(m => m.ImageGalaryPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/expense',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/expense',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
