import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from './../../models/user.model';
import { Address } from './../../models/address.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;
  constructor(  private formBuilder: FormBuilder,
                private userService: UsersService,
                private router: Router) { }

  ngOnInit(): void {
    this.initUserForm();
  }



    //Si on a qu'un validator, on peut le mettre dans le control : ** this.formBuilder.control("", Validators.required) **
    //Si on a plusieurs validators, il faudra les mettre dans un tableau : ** this.formBuilder.control("", [Validators.required, Validators.minLength(5)]), **

  initUserForm(): void {
    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastname: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required,Validators.email, Validators.minLength(5)]),
      description: this.formBuilder.control("", [Validators.required, Validators.minLength(15)]),
      dateBirth: this.formBuilder.control("", Validators.required),

          address: this.formBuilder.group({         //Pour l'adresse, on crée cette fois un groupe, puis des controles pour chaque element d'adresse
                                                    //On ajoute <div class="form-group" formGroupName="address"> avec le nom du groupe dans la <div> du groupe adresse
              street: this.formBuilder.control("", Validators.required),
              city: this.formBuilder.control("", Validators.required),
              state: this.formBuilder.control("", Validators.required),
              zip: this.formBuilder.control("", Validators.required),
          }),
          aliases: this.formBuilder.array([])
    });
  }

  getAliases():FormArray {       //méthode qui permet d'ajouter un champs
    return this.userForm.get("aliases") as FormArray;
  }

  addAliases():void {      //permet à l'utilisateur d'obtenir le tableau de control, Si on veut ajouter un élément au tableau de controle
    this.getAliases().push(this.formBuilder.control("", Validators.required)) //une fois que l'utilisateur clique sur le bouton aliases, il ne peut pas mettre un champ vide alors on met un Validator
  }

  onSubmit(): void {

    const dataUser = this.userForm.value;
    // console.log(dataUser);

    const alias = dataUser.aliases ? dataUser.aliases : [];
    const address = new Address(
          dataUser.street,
          dataUser.city,
          dataUser.state,
          dataUser.zip
          );
    const newUser = new User(
          dataUser.firstname,
          dataUser.lastname,
          dataUser.email,
          address,
          dataUser.description,
          dataUser.dateBirth,
          alias
          );

    this.userService.addUser(newUser);
    this.router.navigate(["users"]);
    //console.log(this.userForm.value);
  }

}
