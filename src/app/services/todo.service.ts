import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';

@Injectable()
export class TodoService{

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
  todos:any;

  todoSlice:any;  //On stocke le tableau d'objet (anciennement "todos" dans la variable "todoSlice" qui deviendra alors un tableau d'objets)

  todosSubject = new Subject<any[]>(); //On importe l'observable Subject et au lieu de définir todos comme une promesse, on revient avec notre setTimeout() :

  constructor() {

//****DEFINITION DE THIS.TODO COMME UNE PROMESSE****

    // this.todos = new Promise((resolve, reject) => {
    //   const data = [
    //     {
    //       todoName: "Projet 1", //une tâche peut avoir un nom
    //       todoStatus: true,     //une tâche peut avoir un status, ex: si la tâche est déjà réalisée ou non
    //       image: "http://placeimg.com/300/300/tech", //une tâche peut avoir une image: ici on met une image aléatoire
    //       isModif: false, //une tâche pour définir que par défaut l'utilisateur ne veut pas afficher l'input et changer le nom du Projet
    //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
    //        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\
    //          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\
    //           officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //       todoName: "Projet 2",
    //       todoStatus: false,
    //       image: "http://placeimg.com/300/300/tech",
    //       isModif: true,
    //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
    //        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\
    //          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\
    //           officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //       todoName: "Projet 3",
    //       todoStatus: true,
    //       image: "http://placeimg.com/300/300/tech",
    //       isModif: false,
    //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
    //        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\
    //          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\
    //           officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //       todoName: "Projet 4",
    //       todoStatus: false,
    //       image: "http://placeimg.com/300/300/tech",
    //       isModif: false,
    //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
    //        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\
    //          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\
    //           officia deserunt mollit anim id est laborum."
    //     },
    //   ];
    //   if(data.length){
    //     setTimeout(() => {
    //       this.todoSlice = data;  //une fois que la communication vers le server et faite, on stocke la valeur dans le "todoSlice"
    //        resolve(data);},3000);
    //   }else{
    //     reject("Pas de données disponibles sur le serveur")
    //   }
    // });

//*****DEFINITION DE THIS.TODO COMME UN OBSERVABLE*****

    setTimeout(() => {
      this.todos = [
        {
          todoName: "Projet 1", //une tâche peut avoir un nom
          todoStatus: true,     //une tâche peut avoir un status, ex: si la tâche est déjà réalisée ou non
          image: "http://placeimg.com/300/300/tech", //une tâche peut avoir une image: ici on met une image aléatoire
          isModif: false, //une tâche pour définir que par défaut l'utilisateur ne veut pas afficher l'input et changer le nom du Projet
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\
              officia deserunt mollit anim id est laborum."
        },
        {
          todoName: "Projet 2",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif: true,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\
              officia deserunt mollit anim id est laborum."
        },
        {
          todoName: "Projet 3",
          todoStatus: true,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\
              officia deserunt mollit anim id est laborum."
        },
        {
          todoName: "Projet 4",
          todoStatus: false,
          image: "http://placeimg.com/300/300/tech",
          isModif: false,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\
              officia deserunt mollit anim id est laborum."
        },
      ];
      this.emitTodos(); //Méthode qui a pour objectif de créer un observable, et de mettre les information dans le todosSubject
    }, 3000);
  }

//la fonction prend un "i" qui est un number
  onChangeStatus(i: number):void {
    // this.todoSlice[i].todoStatus = !this.todoSlice[i].todoStatus;
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    //ca va prendre l'élément du tableau qui est à la position "i" (  this.todos[i]  ),
    //et on va changer son status en y mettant le contraire de sa valeur. (s'il est true, la valeur changera donc en false, et inversement)
    this.emitTodos();
  }

  onChangeIsModif(i: number):void {
    // this.todoSlice[i].isModif = !this.todoSlice[i].isModif;
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
  }



  // getTodo(index: number):any {
  //   if(this.todoSlice[index]) {       //va regarder si l'index existe
  //     return this.todoSlice[index];
  //   }
  //   return false;
  // }
  getTodo(index: number):any {
    if(this.todos[index]) {       //va regarder si l'index existe
      return this.todos[index];
    }
    return false;
  }

  emitTodos(){
    this.todosSubject.next(this.todos)  //next() permet d'envoyer une valeur à notre observable, quand on fera un abonnement c'est la valeur (this.todos) qui sera émise
  }
}
