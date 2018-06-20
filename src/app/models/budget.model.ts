export class Budget {
	public type: string;
	public name: string;
	public amount: string;
	public recurring: string;
	public frequency: string;

	constructor(type: string, name: string, amount: string, recurring: string, frequency: string){
		this.type = type;
		this.name = name;
		this.amount = amount;
		this.recurring = recurring;
		this.frequency = frequency;
	}

}
