import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';
import { User } from './../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[] = [];
  declare usersSubscription: Subscription;

  constructor(  private userService: UsersService) { }

  // ngOnInit(): void {
  //   this.users = this.userService.users;
  // }

  ngOnInit():void {
		this.usersSubscription = this.userService.usersSub.subscribe(
		  (usersRecup: User[]) => {
		  this.users = usersRecup;
		}
		);
		this.userService.emitUsers();
	}

  ngOnDestroy():void{
    this.usersSubscription.unsubscribe();
  }

}
