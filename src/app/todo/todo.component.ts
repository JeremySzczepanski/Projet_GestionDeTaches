import { Component } from '@angular/core';


@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls:['./todo.component.css']
})



export class TodoComponent{
  //On met ici les données des projets pour pouvoir les utiliser dans le todo.component.html
  //et les gérer de façon dynamique.
  todoOne: string = "Projet 1";
  todoTwo: string = "Projet 2";
  todoThree: string = "Projet 3";
  todoFour: string = "Projet 4";

  //On crée une variable today avec une date pour tester les pipes
  today = new Date();





  // //On crée une variable pour demander si l'utilisateur veut mofifier le nom
  // isModif = false;

//*****************************************************************************
  //On peut regrouper le tout dans un tableau: ( string[] : tableau de chaines de caractères)

// todos: string[] = ["Projet t1","Projet t2","Projet t3","Projet t4","Projet t5","Projet t6","Projet t7","Projet t8"];
//*****************************************************************************


  //On peut representer une tâche par une chaine de caractère,
  //On peut représenter une tâche par un objet :

  todos = [
    {
      todoName: "Projet 1", //une tâche peut avoir un nom
      todoStatus: true,     //une tâche peut avoir un status, ex: si la tâche est déjà réalisée ou non
      image: "http://placehold.it/150", //une tâche peut avoir une image: ici on met une image aléatoire
      isModif: false //une tâche pour définir que par défaut l'utilisateur ne veut pas afficher l'input et changer le nom du Projet
    },
    {
      todoName: "Projet 2",
      todoStatus: false,
      image: "http://placehold.it/151",
      isModif: true
    },
    {
      todoName: "Projet 3",
      todoStatus: true,
      image: "http://placehold.it/151",
      isModif: false
    },
    {
      todoName: "Projet 4",
      todoStatus: false,
      image: "http://placehold.it/151",
      isModif: false
    },
  ]


//la fonction prend un "i" qui est un number
  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    //ca va prendre l'élément du tableau qui est à la position "i" (  this.todos[i]  ),
    //et on va changer son status en y mettant le contraire de sa valeur. (s'il est true, la valeur changera donc en false, et inversement)
  }

  onChangeIsModif(i: number){
    this.todos[i].isModif = !this.todos[i].isModif;
  }
}
