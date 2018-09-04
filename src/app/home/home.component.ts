import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;
	
  constructor(private _router : Router){    
 this.menuData=[{"text":"Test","expand":true,"children":[{"text":"User Registration","routerLink":"demoappbc/test/user-registration","selected":false},{"text":"Loginui","routerLink":"demoappbc/test/loginui","selected":false},{"text":"Vertiacalform","routerLink":"demoappbc/test/vertiacalform","selected":false}]}]; }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
