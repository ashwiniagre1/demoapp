/**
 * Created by: 
 * Date: 04/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Loginui } from './../../models/loginui.model'
@Component(
{
	selector: 'loginui',
	templateUrl: 'loginui.component.html'
})
export class LoginuiComponent implements OnInit
{
	
	loginui: Loginui;
	
	
	constructor( private router: Router)
	{
		this.loginui = new Loginui();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

