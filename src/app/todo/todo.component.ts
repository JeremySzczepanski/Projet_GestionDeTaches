import { TodoService } from '../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls:['./todo.component.css']
})



export class TodoComponent implements OnInit{

    today: any;
    todos: any;



    constructor(private todoService: TodoService,
                private router: Router) {
      //private pour qu'il soit accessible uniquement à l'intérieur de ce component,
      //et le nom de la variable "todoService" qui sera de type "TodoService"
    }

    ngOnInit(){
      this.today = this.todoService.today;
      this.todoService.todos
        .then((todosRecup: any) => {
          this.todos = todosRecup;
        })
        .catch((error: any) => {
          console.log("erreur"+error);
        });
    }

    onChangeStatus(i: number){
      this.todoService.onChangeStatus(i); //on appelle la méthode onChangeStatus dans le service et on lui donne le paramètre (i) que l'on a récupéré.
    }

    onChangeIsModif(i: number){
      this.todoService.onChangeIsModif(i);
    }

    onView(id: number){
      this.router.navigate(["single-todo",id])  //navigate prend en paramètre un tableau, dans le tableau on met la route vers laquelle on veut renvoyer l'utilisateur
    }



}
