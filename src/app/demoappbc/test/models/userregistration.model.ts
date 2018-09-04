/**
 * 
 * Date: 04/09/2018	
 */
export class Userregistration
{
	
	private _firstname: string;
	private _lastname: string;
	private _phonenumber: number;
	private _gender: string;
	
	constructor() { 
	}
	
	set firstname(value: string) {
		this._firstname = value;
	}
	get firstname() : string {
		return this._firstname;
	}
	set lastname(value: string) {
		this._lastname = value;
	}
	get lastname() : string {
		return this._lastname;
	}
	set phonenumber(value: number) {
		this._phonenumber = value;
	}
	get phonenumber() : number {
		return this._phonenumber;
	}
	set gender(value: string) {
		this._gender = value;
	}
	get gender() : string {
		return this._gender;
	}
	
}
