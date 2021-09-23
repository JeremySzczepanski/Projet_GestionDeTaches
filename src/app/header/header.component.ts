import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  declare secondesSub: Subscription;
  declare salutationSub: Subscription;
  secondes:any;

  constructor() {
   }

  ngOnInit(): void {


// OBSERVABLE
    // const secondesObs = new Observable((observer) => {
    //   let value = 0;
    //   const interval = setInterval(() => {
    //     //if(value % 2 === 0){
    //       observer.next(value);
    //     //}
    //     value++;
    //   },1000);
    //     return () => clearInterval(interval)
    // });

    // On peut remplacer l'OBSERVABLE par "interval()" importé depuis 'rxjs':
    const secondesObs = interval(1000);

// ABONNEMENT
    this.secondesSub = secondesObs.subscribe(
        (value) => {
          this.secondes = value;
          console.log(value);
        }
    );




    // const salutation = new Observable((observer)=>{
    //   observer.next("Hello ");
    //   observer.next("World !");
    //   observer.complete();

    // });


    // this.salutationSub = salutation.subscribe(
    //   (value)=>{console.log("Value :"+value);
    //   },
    //   (error)=>{console.log("erreur :"+error)
    //   },
    //   ()=>{console.log("Observable complété");
    //   }
    // );


  }

// DESTRUCTION
    ngOnDestroy() {
      this.secondesSub.unsubscribe();
      // this.salutationSub.unsubscribe();
    }
}
