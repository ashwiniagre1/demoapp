import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { LoginuiComponent } from './components/loginui/loginui.component';
import { VertiacalformComponent } from './components/vertiacalform/vertiacalform.component';
import { ROUTES } from './test.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	  UserregistrationComponent,
	  LoginuiComponent,
	  VertiacalformComponent,
	  ],
	  providers: [
	  ]
})
export class TestModule {
}
