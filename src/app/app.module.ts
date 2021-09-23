import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './home/home.component';
import { ForohfourComponent } from './forohfour/forohfour.component';
import { ContactComponent } from './contact/contact.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';

export const ROUTES : Routes =[
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
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    ForohfourComponent,
    ContactComponent,
    SingleTodoComponent,
    AddTodoComponent,
    UsersComponent,
    AddUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

