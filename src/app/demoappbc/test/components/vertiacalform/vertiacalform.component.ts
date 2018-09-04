/**
 * Created by: 
 * Date: 04/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Vertiacalform } from './../../models/vertiacalform.model'
@Component(
{
	selector: 'vertiacalform',
	templateUrl: 'vertiacalform.component.html'
})
export class VertiacalformComponent implements OnInit
{
	
	vertiacalform: Vertiacalform;
	
	successMsgData:any[]=[];
	
	constructor( private router: Router)
	{
		this.vertiacalform = new Vertiacalform();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

