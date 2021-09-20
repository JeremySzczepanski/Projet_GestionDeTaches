import { TodoService } from '../services/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls:['./todo.component.css']
})



export class TodoComponent implements OnInit, OnDestroy{

    today: any;
    todos: any;

    declare todosSub: Subscription;

    constructor(private todoService: TodoService,
                private router: Router) {
      //private pour qu'il soit accessible uniquement à l'intérieur de ce component,
      //et le nom de la variable "todoService" qui sera de type "TodoService"
    }

//*****UTILISATION EN PROMISE *****/
    // ngOnInit(){
    //   this.today = this.todoService.today;
    //   this.todoService.todos
    //     .then((todosRecup: any) => {
    //       this.todos = todosRecup;
    //     })
    //     .catch((error: any) => {
    //       console.log("erreur"+error);
    //     });
    // }
//*****UTLISATION EN OBSERVABLE*****

    ngOnInit(){
      this.todosSub = this.todoService.todosSubject.subscribe(		    // on s'abonne à l'observable
      (value: any[]) => {						                                  // cas ou ca nous retourne une information (ici un tableau de données)
         this.todos = value;						                              // on met la valeur reçu à l'intérieur de todos
    },
      (error) => {							// cas d'erreur : on affiche error dans la console
         console.log("erreur :"+error);
    },
      () => {								// si tout se passe correctement, on affiche "complété" dans la console
         console.log("Observable complété");
      })
      this.todoService.emitTodos(); //une fois que l'on a fait le premier abonnement,  on emet les données.
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

    ngOnDestroy(){
      this.todosSub.unsubscribe();    //On fait le désabonnement lorsque l'on va détruire le component.
    }


}
