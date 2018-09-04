/**
 * Created by: 
 * Date: 04/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Userregistration } from './../../models/userregistration.model'
@Component(
{
	selector: 'userregistration',
	templateUrl: 'userregistration.component.html'
})
export class UserregistrationComponent implements OnInit
{
	
	userregistration: Userregistration;
	
	radiogroupData:any;
	
	constructor( private router: Router)
	{
		this.userregistration = new Userregistration();
		
	this.radiogroupData={"data":[{"gender":"female","genderId":"key"},{"gender":"male","genderId":"key"}]};
	}
	ngOnInit()
	{
	}
	
	
	
}

