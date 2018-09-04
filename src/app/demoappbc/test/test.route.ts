
import {Routes } from '@angular/router';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { LoginuiComponent } from './components/loginui/loginui.component';
import { VertiacalformComponent } from './components/vertiacalform/vertiacalform.component';
export const ROUTES: Routes = [
{
	    path: 'user-registration', component: UserregistrationComponent
},
{
	    path: 'loginui', component: LoginuiComponent
},
{
	    path: 'vertiacalform', component: VertiacalformComponent
},
];

