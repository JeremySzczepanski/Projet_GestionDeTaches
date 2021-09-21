export class Todo{
  todoName!: string;
  todoStatus: boolean = true; //On met une valeur par défaut true pour que le bouton select soit par défaut cette valeur dans le template HTML
  description!: string;
  isModif: boolean = false;                                    //On lui donne une valeur par défaut qui est false
  image: string = "http://placeimg.com/300/300/tech" ;        //On lui donne une valeur par défaut de l'URL automatique des images
}


//Lorsque l'objet est instancié, automatiquement les valeurs par défaut seront disponibles, et dans le template,
//le select : [(ngModel)] = "todo.todoStatus" sera mis en valeur par défaut sur true soit "En cours"

