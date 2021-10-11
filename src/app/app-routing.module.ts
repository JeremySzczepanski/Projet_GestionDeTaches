import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { ForohfourComponent } from './forohfour/forohfour.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'todos', component: TodoComponent},
  {path: 'fourohfour', component: ForohfourComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'add-todo', component: AddTodoComponent},
  {path: 'single-todo/:id', component: SingleTodoComponent},
  {path: '', component: TodoComponent},
  {path: '**', pathMatch:'full', redirectTo: 'fourohfour' }, //lorsqu'une URL n'est pas trouvé dans les routes précédentes on le renvoie vers la route fourohfour
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
