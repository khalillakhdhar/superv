import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [{ path: '', component: DashboardComponent
,
children: [
  { path: '',component:AccueilComponent},
  { path: 'users', component: UsersComponent },
  { path: 'books', component:BooksComponent },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
