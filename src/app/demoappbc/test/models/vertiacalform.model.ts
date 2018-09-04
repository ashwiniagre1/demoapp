/**
 * 
 * Date: 04/09/2018	
 */
export class Vertiacalform
{
	
	private _FirstTextInput: string;
	private _EmailId: string;
	private _SecondTextInput: string;
	private _Password: string;
	private _NumberInput: number;
	private _CheckBox: boolean;
	
	constructor() { 
	}
	
	set FirstTextInput(value: string) {
		this._FirstTextInput = value;
	}
	get FirstTextInput() : string {
		return this._FirstTextInput;
	}
	set EmailId(value: string) {
		this._EmailId = value;
	}
	get EmailId() : string {
		return this._EmailId;
	}
	set SecondTextInput(value: string) {
		this._SecondTextInput = value;
	}
	get SecondTextInput() : string {
		return this._SecondTextInput;
	}
	set Password(value: string) {
		this._Password = value;
	}
	get Password() : string {
		return this._Password;
	}
	set NumberInput(value: number) {
		this._NumberInput = value;
	}
	get NumberInput() : number {
		return this._NumberInput;
	}
	set CheckBox(value: boolean) {
		this._CheckBox = value;
	}
	get CheckBox() : boolean {
		return this._CheckBox;
	}
	
}
