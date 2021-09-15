import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})

export class SingleTodoComponent implements OnInit {
  todo: any;
  error: any;

  constructor(  private route: ActivatedRoute, //lorsque l'ActivatedRoute récupére un paramètre, par défaut c'est une string
                private todoService: TodoService
    ) { }

    ngOnInit(): void {
      const id = +this.route.snapshot.params['id']; //permet de récupérer le paramètre qui est indiqué
      this.todo = this.todoService.getTodo(id);
      if(!this.todo){                           //si le this.todo n'existe pas on return "error"
        this.error = "Id incorrect";            //alors on assigne une valeur à "error"
      }

  }


}
