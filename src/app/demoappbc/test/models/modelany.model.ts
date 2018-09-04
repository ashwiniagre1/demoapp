/**
 * 
 * Date: 04/09/2018	
 */
export class ModelAny
{
	
	private _nameB: boolean;
	
	constructor() { 
	}
	
	set nameB(value: boolean) {
		this._nameB = value;
	}
	get nameB() : boolean {
		return this._nameB;
	}
	
}
